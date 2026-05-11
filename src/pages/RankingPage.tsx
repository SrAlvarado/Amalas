import { useState } from 'react'
import { AppShell } from '../components/templates/AppShell'
import { MVPBoard } from '../components/organisms/MVPBoard'
import { LoserBoard } from '../components/organisms/LoserBoard'
import { RankItem } from '../components/molecules/RankItem'
import { useRanking } from '../hooks/useRanking'
import { useAuth } from '../hooks/useAuth'
import type { TabId } from '../components/organisms/BottomNav'

/**
 * Página RankingPage: "EL MURO" con datos reales.
 * Muestra el estado del mes calculando puntos y penalizaciones.
 */
export function RankingPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<TabId>('rank')
  
  // Squad ID fijo para el MVP
  const SQUAD_ID = '00000000-0000-0000-0000-000000000000'
  const { ranking, loading } = useRanking(SQUAD_ID)

  if (loading) return <div className="h-screen bg-[#F4ECD8] flex items-center justify-center font-display uppercase">Calculando el muro...</div>

  const mvp = ranking[0]
  const loser = ranking.length > 1 ? ranking[ranking.length - 1] : null
  const middleRank = ranking.slice(1, ranking.length - 1)

  return (
    <AppShell 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      streak={4}
      notifications={0}
    >
      <div className="space-y-8">
        <div className="px-1">
          <h2 className="font-display text-[26px] leading-tight uppercase">EL MURO</h2>
          <p className="font-heavy text-[12px] text-black/60 uppercase">Clasificación real de tu cuadrilla</p>
        </div>

        {/* MVP */}
        {mvp && (
          <MVPBoard 
            name={mvp.username} 
            face={mvp.avatar_face} 
            pts={mvp.total_pts} 
            trend={0} 
          />
        )}

        {/* Middle Ranking */}
        <div className="space-y-3">
          {middleRank.map((item, index) => (
            <RankItem 
              key={item.profile_id} 
              pos={index + 2}
              name={item.username}
              pts={item.total_pts}
              face={item.avatar_face}
              trend={0}
              isYou={item.profile_id === user?.id}
            />
          ))}
        </div>

        {/* Loser */}
        {loser && (
          <LoserBoard 
            pos={ranking.length} 
            name={loser.username} 
            pts={loser.total_pts} 
            face={loser.avatar_face} 
            punishmentTitle="Pagar la próxima ronda"
            punishmentDesc="El lunes en el bar de siempre."
          />
        )}

        {ranking.length === 0 && (
          <div className="text-center p-12 opacity-30 font-display uppercase italic">
            El muro está vacío...<br/>Empieza a subir fotos.
          </div>
        )}

        <div className="text-center py-4">
          <p className="font-heavy text-[10px] text-black/40 uppercase">
            Actualizado en tiempo real
          </p>
        </div>
      </div>
    </AppShell>
  )
}
