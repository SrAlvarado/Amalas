import { useState, useEffect } from 'react'
import { AppShell } from '../components/templates/AppShell'
import { VoteCard } from '../components/organisms/VoteCard'
import { useDailyChallenge } from '../hooks/useDailyChallenge'
import { useVotation } from '../hooks/useVotation'
import type { TabId } from '../components/organisms/BottomNav'

/**
 * Página JuicioPage: Pantalla de votaciones real.
 * Obtiene las fotos de los compañeros y permite repartir los puntos.
 */
export function JuicioPage() {
  const [activeTab, setActiveTab] = useState<TabId>('votar')
  const { challenge } = useDailyChallenge()
  const { castVote, getSquadSubmissions, loading: votationLoading } = useVotation()
  
  const [submissions, setSubmissions] = useState<any[]>([])
  const [votes, setVotes] = useState<Record<string, string | null>>({})

  useEffect(() => {
    async function loadData() {
      if (challenge) {
        const SQUAD_ID = '00000000-0000-0000-0000-000000000000'
        const { data } = await getSquadSubmissions(SQUAD_ID, challenge.id)
        if (data) setSubmissions(data)
      }
    }
    loadData()
  }, [challenge])

  const handleVote = async (subId: string, value: string) => {
    const isPB = value === 'PB'
    const points = isPB ? 0 : parseInt(value)
    
    const result = await castVote(subId, points, isPB)
    
    if (result.success) {
      setVotes(prev => ({
        ...prev,
        [subId]: prev[subId] === value ? null : value
      }))
    } else {
      alert('Error al votar: ' + result.error)
    }
  }

  return (
    <AppShell 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      streak={4}
      notifications={2}
    >
      <div className="space-y-4">
        <div className="px-1">
          <h2 className="font-display text-[26px] leading-tight uppercase">EL JUICIO</h2>
          <p className="font-heavy text-[12px] text-black/60 uppercase">
            {submissions.length > 0 ? 'Reparte tus puntos gamberros' : 'Nadie ha subido foto todavía...'}
          </p>
        </div>

        <div className="space-y-6">
          {submissions.map((sub) => (
            <VoteCard
              key={sub.id}
              name={sub.profiles.username}
              face={sub.profiles.avatar_face}
              pose="TEMA DEL DÍA"
              uploadTime={new Date(sub.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              currentVote={votes[sub.id]}
              onVote={(v) => handleVote(sub.id, v)}
              className={votationLoading ? 'opacity-50 pointer-events-none' : ''}
            />
          ))}
        </div>

        <div className="h-10" />
      </div>
    </AppShell>
  )
}
