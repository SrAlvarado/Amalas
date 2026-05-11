import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export interface RankUser {
  profile_id: string
  username: string
  avatar_face: any
  total_pts: number
}

/**
 * Hook useRanking: Calcula la clasificación de la cuadrilla.
 * Agrega los puntos de votos y resta las penalizaciones de tiempo.
 */
export function useRanking(squadId: string) {
  const [ranking, setRanking] = useState<RankUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!squadId) return

    async function fetchRanking() {
      // Nota: En una app de producción, esto sería una Vista en Postgres o una RPC
      // para mayor eficiencia. Aquí lo resolvemos con lógica de agregación básica.
      
      const { data: members, error: memError } = await supabase
        .from('squad_members')
        .select(`
          profile_id,
          profiles (username, avatar_face)
        `)
        .eq('squad_id', squadId)

      if (memError) return

      const rankPromises = members.map(async (m: any) => {
        // Sumar puntos de votos recibidos
        const { data: votes } = await supabase
          .from('votes')
          .select('points, is_pues_bien')
          .filter('submission_id', 'in', 
            supabase.from('submissions').select('id').eq('profile_id', m.profile_id)
          )
        
        // Sumar penalizaciones
        const { data: subs } = await supabase
          .from('submissions')
          .select('penalty_points')
          .eq('profile_id', m.profile_id)

        const votePts = votes?.reduce((acc, v) => acc + v.points + (v.is_pues_bien ? -1 : 0), 0) || 0
        const penaltyPts = subs?.reduce((acc, s) => acc + s.penalty_points, 0) || 0

        return {
          profile_id: m.profile_id,
          username: m.profiles.username,
          avatar_face: m.profiles.avatar_face,
          total_pts: votePts + penaltyPts
        }
      })

      const results = await Promise.all(rankPromises)
      setRanking(results.sort((a, b) => b.total_pts - a.total_pts))
      setLoading(false)
    }

    fetchRanking()
  }, [squadId])

  return { ranking, loading }
}
