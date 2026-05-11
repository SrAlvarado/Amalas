import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { User, Session } from '@supabase/supabase-js'

/**
 * Hook useAuth: Gestiona el estado de autenticación y sesión del usuario.
 * Proporciona métodos para login social y cierre de sesión.
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  const loginWithApple = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'apple' })
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return {
    user,
    session,
    loading,
    loginWithGoogle,
    loginWithApple,
    logout,
    isAuthenticated: !!user,
  }
}
