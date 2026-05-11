import { useState, useEffect } from 'react'
import { AppShell } from '../components/templates/AppShell'
import { ThemeCard } from '../components/organisms/ThemeCard'
import { TimerCard } from '../components/organisms/TimerCard'
import { ActionShootButton } from '../components/organisms/ActionShootButton'
import { SquadGrid } from '../components/organisms/SquadGrid'
import type { TabId } from '../components/organisms/BottomNav'

/**
 * Página RetoPage: Pantalla principal del día.
 * Muestra el tema del reto, el tiempo restante, el botón de acción y el estado de la cuadrilla.
 */
export function RetoPage() {
  const [activeTab, setActiveTab] = useState<TabId>('reto')
  const [timeLeft, setTimeLeft] = useState({ h: 3, m: 45, s: 12 })

  // Mock data - En el futuro vendrá de useReto()
  const theme = {
    title: '¡POSTURA<br/>DE <span class="text-[#EF233C]">YOGA!</span>',
    description: 'Cuanto más ridícula, más puntos. ¡Queremos ver esos nudos humanos!',
    proposedBy: 'LAIA',
    friends: ['face-1', 'face-2', 'face-3', 'face-4']
  }

  const squad = [
    { name: 'MARCOS', face: 'face-1' as const, done: true },
    { name: 'LAIA', face: 'face-2' as const, done: true },
    { name: 'INES', face: 'face-4' as const, done: true },
    { name: 'TÚ', face: 'face-5' as const, done: false, isYou: true },
    { name: 'JON', face: 'face-6' as const, done: false },
    { name: 'PAU', face: 'face-3' as const, done: false },
  ]

  return (
    <AppShell 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      streak={4}
      notifications={2}
    >
      <div className="space-y-6">
        {/* Timer Card */}
        <TimerCard 
          hours={timeLeft.h} 
          minutes={timeLeft.m} 
          seconds={timeLeft.s} 
          progress={68} 
        />

        {/* Theme Card */}
        <ThemeCard 
          title={theme.title}
          description={theme.description}
          proposedBy={theme.proposedBy}
          friendFaces={theme.friends}
        />

        {/* Action Button */}
        <ActionShootButton 
          onClick={() => alert('Abriendo cámara gamberra...')} 
        />

        {/* Squad Grid */}
        <SquadGrid members={squad} />
      </div>
    </AppShell>
  )
}
