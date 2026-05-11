import { Avatar } from '../../atoms/Avatar'
import type { AvatarFace } from '../../atoms/Avatar'

export interface MVPBoardProps {
  /** Nombre del líder */
  name: string
  /** Puntos actuales */
  pts: number
  /** Cara del avatar */
  face: AvatarFace
  /** Tendencia o racha */
  trend: number
  /** Recompensa opcional */
  reward?: string
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo MVPBoard: Cuadro de honor para el líder del ranking.
 * Estética premium con dorado, destellos y tipografía de impacto.
 */
export function MVPBoard({
  name,
  pts,
  face,
  trend,
  className = '',
}: MVPBoardProps) {
  return (
    <div className={`relative bg-[#FFD60A] border-[4px] border-black p-6 shadow-comic-xl overflow-hidden ${className}`}>
      {/* Background patterns */}
      <div className="absolute inset-0 stripes-white opacity-20 pointer-events-none" />
      <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex-1">
          <div className="font-heavy text-[11px] text-black tracking-[0.2em] uppercase mb-1">
            EL REY DE LA PISTA ↓
          </div>
          <h2 className="font-display text-[42px] leading-[0.9] uppercase break-words">
            {name}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="bg-black text-[#FFD60A] px-3 py-1 font-display text-[20px] shadow-comic">
              {pts} PTS
            </div>
            {trend > 0 && (
              <span className="font-heavy text-[12px] bg-white px-2 py-0.5 border-[2px] border-black rounded-full animate-bounce">
                🔥 RACHA
              </span>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-white blur-2xl opacity-40 rounded-full animate-pulse" />
          <Avatar 
            face={face} 
            size="xl" 
            border 
            className="relative rotate-[5deg] scale-110" 
          />
          {/* Crown decoration */}
          <div className="absolute -top-6 -right-2 text-[32px] rotate-[15deg] drop-shadow-comic">
            👑
          </div>
        </div>
      </div>

      {/* Comic Destellos */}
      <div className="absolute bottom-2 right-4 font-display text-[14px] text-white/50 italic select-none">
        #1 ACTUAL
      </div>
    </div>
  )
}
