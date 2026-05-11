import { useState } from 'react'
import { AppShell } from '../components/templates/AppShell'
import { MVPBoard } from '../components/organisms/MVPBoard'
import { LoserBoard } from '../components/organisms/LoserBoard'
import { RankItem } from '../components/molecules/RankItem'
import type { TabId } from '../components/organisms/BottomNav'

/**
 * Página RankingPage: "EL MURO".
 * Muestra el estado del mes, destacando al MVP y al Perdedor, seguido del resto del grupo.
 */
export function RankingPage() {
  const [activeTab, setActiveTab] = useState<TabId>('rank')

  const rankingData = [
    { pos: 2, name: 'MARCOS', pts: 36, face: 'face-1' as const, trend: 3 },
    { pos: 3, name: 'PAU', pts: 31, face: 'face-3' as const, trend: -1 },
    { pos: 4, name: 'TÚ', pts: 28, face: 'face-5' as const, trend: 2, isYou: true },
    { pos: 5, name: 'INES', pts: 24, face: 'face-4' as const, trend: 0 },
    { pos: 6, name: 'PEPE', pts: 21, face: 'face-6' as const, trend: -2 },
  ]

  return (
    <AppShell 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      streak={4}
      notifications={0}
    >
      <div className="space-y-8">
        {/* Intro */}
        <div className="px-1">
          <h2 className="font-display text-[26px] leading-tight uppercase">EL MURO</h2>
          <p className="font-heavy text-[12px] text-black/60 uppercase">Clasificación del mes de Mayo</p>
        </div>

        {/* MVP Section */}
        <MVPBoard 
          name="LAIA" 
          face="face-2" 
          pts={42} 
          trend={7} 
        />

        {/* Middle Ranking */}
        <div className="space-y-3">
          {rankingData.map((item) => (
            <RankItem key={item.name} {...item} />
          ))}
        </div>

        {/* Loser Section */}
        <LoserBoard 
          pos={12} 
          name="JON" 
          pts={14} 
          face="face-6" 
          punishmentTitle="Pagar la próxima ronda"
          punishmentDesc="El lunes en el bar de siempre."
        />

        {/* Footer info */}
        <div className="text-center py-4">
          <p className="font-heavy text-[10px] text-black/40 uppercase">
            El ranking se reinicia en 12 días
          </p>
        </div>
      </div>
    </AppShell>
  )
}
