import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

/**
 * Hook useVotation: Gestiona el sistema de votos estilo Eurovisión.
 * Permite repartir 3, 2, 1 puntos y usar el comodín "Pues bien".
 */
export function useVotation() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)

  const castVote = async (submissionId: string, points: number, isPuesBien: boolean = false) => {
    if (!user) return { error: 'Not authenticated' }
    setLoading(true)

    try {
      // Upsert para permitir cambiar el voto si no ha terminado el periodo
      const { error } = await supabase
        .from('votes')
        .upsert({
          submission_id: submissionId,
          voter_id: user.id,
          points: isPuesBien ? 0 : points,
          is_pues_bien: isPuesBien
        }, {
          onConflict: 'submission_id,voter_id'
        })

      if (error) throw error
      return { success: true }
    } catch (err: any) {
      return { error: err.message }
    } finally {
      setLoading(false)
    }
  }

  const getSquadSubmissions = async (squadId: string, challengeId: string) => {
    const { data, error } = await supabase
      .from('submissions')
      .select(`
        *,
        profiles (username, avatar_face)
      `)
      .eq('squad_id', squadId)
      .eq('challenge_id', challengeId)
      .neq('profile_id', user?.id) // No votarse a uno mismo

    return { data, error }
  }

  return { castVote, getSquadSubmissions, loading }
}
