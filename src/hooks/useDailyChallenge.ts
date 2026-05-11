import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export interface Challenge {
  id: string
  theme_title: string
  theme_description: string
  start_time: string
  end_time: string
}

/**
 * Hook useDailyChallenge: Obtiene el reto activo del día.
 * Calcula el estado del tiempo restante.
 */
export function useDailyChallenge() {
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchChallenge() {
      const now = new Date().toISOString()
      
      const { data, error } = await supabase
        .from('daily_challenges')
        .select('*')
        .lte('start_time', now)
        .gte('end_time', now)
        .single()

      if (!error && data) {
        setChallenge(data)
      }
      setLoading(false)
    }

    fetchChallenge()
  }, [])

  return { challenge, loading }
}
