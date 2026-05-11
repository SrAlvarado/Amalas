import { useState } from 'react'
import { AppShell } from '../components/templates/AppShell'
import { VoteCard } from '../components/organisms/VoteCard'
import type { TabId } from '../components/organisms/BottomNav'

/**
 * Página JuicioPage: Pantalla de votaciones.
 * Muestra las fotos subidas por los compañeros para que el usuario reparta sus puntos.
 */
export function JuicioPage() {
  const [activeTab, setActiveTab] = useState<TabId>('votar')
  const [votes, setVotes] = useState<Record<string, string | null>>({
    'marcos': null,
    'laia': '3',
    'jon': null
  })

  const handleVote = (name: string, value: string) => {
    setVotes(prev => ({
      ...prev,
      [name]: prev[name] === value ? null : value
    }))
  }

  const submissions = [
    { name: 'MARCOS', face: 'face-1' as const, pose: 'GUERRERO II', time: '14:20' },
    { name: 'LAIA', face: 'face-2' as const, pose: 'ÁRBOL BORRACHO', time: '14:45' },
    { name: 'JON', face: 'face-6' as const, pose: 'EL NIÑO MALO', time: '15:10' },
  ]

  return (
    <AppShell 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      streak={4}
      notifications={2}
    >
      <div className="space-y-4">
        {/* Intro text */}
        <div className="px-1">
          <h2 className="font-display text-[26px] leading-tight uppercase">EL JUICIO</h2>
          <p className="font-heavy text-[12px] text-black/60 uppercase">Reparte tus puntos. ¡Sé justo o gamberro!</p>
        </div>

        {/* Submissions List */}
        <div className="space-y-6">
          {submissions.map((sub) => (
            <VoteCard
              key={sub.name}
              name={sub.name}
              face={sub.face}
              pose={sub.pose}
              uploadTime={sub.time}
              currentVote={votes[sub.name.toLowerCase()]}
              onVote={(v) => handleVote(sub.name.toLowerCase(), v)}
            />
          ))}
        </div>

        {/* Empty state bottom padding */}
        <div className="h-10" />
      </div>
    </AppShell>
  )
}
