import { useState, useEffect } from 'react'
import { AppShell } from '../components/templates/AppShell'
import { ThemeCard } from '../components/organisms/ThemeCard'
import { TimerCard } from '../components/organisms/TimerCard'
import { ActionShootButton } from '../components/organisms/ActionShootButton'
import { SquadGrid } from '../components/organisms/SquadGrid'
import { CameraModal } from '../components/organisms/CameraModal'
import type { TabId } from '../components/organisms/BottomNav'

import { useDailyChallenge } from '../hooks/useDailyChallenge'
import { useSubmissions } from '../hooks/useSubmissions'
import { useAuth } from '../hooks/useAuth'

/**
 * Página RetoPage: Pantalla principal del día.
 * Muestra el tema del reto, el tiempo restante, el botón de acción y el estado de la cuadrilla.
 */
export function RetoPage() {
  const { user } = useAuth()
  const { challenge, loading: challengeLoading } = useDailyChallenge()
  const { uploadSubmission, isUploading } = useSubmissions()
  
  const [activeTab, setActiveTab] = useState<TabId>('reto')
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 })

  useEffect(() => {
    if (challenge) {
      const timer = setInterval(() => {
        const now = new Date().getTime()
        const end = new Date(challenge.end_time).getTime()
        const diff = end - now
        
        if (diff > 0) {
          setTimeLeft({
            h: Math.floor((diff / (1000 * 60 * 60)) % 24),
            m: Math.floor((diff / (1000 * 60)) % 60),
            s: Math.floor((diff / 1000) % 60)
          })
        } else {
          setTimeLeft({ h: 0, m: 0, s: 0 })
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [challenge])

  const handlePhotoCaptured = async (blob: Blob) => {
    if (!challenge) return
    const SQUAD_ID = '00000000-0000-0000-0000-000000000000' 
    const result = await uploadSubmission(challenge.id, SQUAD_ID, blob, challenge.end_time)
    
    if (result.success) {
      alert(`¡FOTO SUBIDA! Penalización: ${result.penalty} pts`)
      setIsCameraOpen(false)
    } else {
      alert('Error al subir: ' + result.error)
    }
  }

  const squad = [
    { name: 'TÚ', face: (user?.user_metadata?.avatar_face as any) || 'face-5', done: false, isYou: true },
    { name: 'PEPE', face: 'face-1' as const, done: true },
  ]

  if (challengeLoading) return (
    <div className="h-screen bg-[#F4ECD8] flex items-center justify-center font-display text-[32px] uppercase">
      Buscando reto...
    </div>
  )

  return (
    <AppShell 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      streak={4}
      notifications={2}
    >
      <div className="space-y-6">
        <TimerCard 
          hours={timeLeft.h} 
          minutes={timeLeft.m} 
          seconds={timeLeft.s} 
          progress={challenge ? 68 : 0} 
        />

        {challenge ? (
          <ThemeCard 
            title={challenge.theme_title}
            description={challenge.theme_description}
            proposedBy="SISTEMA"
            friendFaces={['face-1', 'face-2']}
          />
        ) : (
          <div className="bg-white border-[3.5px] border-black p-6 text-center font-display text-[20px] uppercase shadow-comic">
            No hay reto activo.<br/>Vuelve más tarde, gamberro.
          </div>
        )}

        <ActionShootButton 
          onClick={() => setIsCameraOpen(true)} 
          disabled={isUploading || !challenge}
        />

        <SquadGrid members={squad} />

        <CameraModal 
          isOpen={isCameraOpen} 
          onClose={() => setIsCameraOpen(false)} 
          onPhotoCaptured={handlePhotoCaptured} 
        />
      </div>
    </AppShell>
  )
}
