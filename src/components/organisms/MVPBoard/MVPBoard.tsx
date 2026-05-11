import { Icon } from '../../atoms/Icon'
import { Avatar, AvatarFace } from '../../atoms/Avatar'

export interface MVPBoardProps {
  /** Nombre del MVP */
  name: string
  /** Cara del avatar */
  face: AvatarFace
  /** Puntos actuales */
  pts: number
  /** Tendencia (+N) */
  trend: number
  /** Premio o descripción */
  reward?: string
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo MVPBoard: Tarjeta dorada destacada para el líder del ranking semanal.
 * Utiliza colores dorados, elementos burst y el icono de la corona.
 */
export function MVPBoard({
  name,
  face,
  pts,
  trend,
  reward = 'Premio: elige el reto del lunes.',
  className = '',
}: MVPBoardProps) {
  return (
    <div className={`relative mb-4 ${className}`}>
      {/* Crown Banner */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 bg-black text-[#FFD60A] font-display text-[14px] px-3 py-1 rotate-[-3deg] border-[2.5px] border-[#FFD60A] shadow-comic">
        <Icon size={16} stroke={2.5}>
          <path d="M3 7l4 5 5-7 5 7 4-5v11H3z" />
          <path d="M3 18h18" />
        </Icon>
        EL MVP DE LA SEMANA
      </div>
      
      <div className="relative bg-[#FFC300] border-[4px] border-black rounded-md shadow-comic-xl overflow-hidden">
        {/* Decorative Halftone & Burst */}
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
        <div className="absolute -right-6 -top-6 w-32 h-32 burst bg-white border-2 border-black opacity-60" />
        
        {/* Content */}
        <div className="relative px-4 pt-6 pb-4 flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <Avatar face={face} size="lg" className="border-[3.5px] border-black" />
            <div className="absolute -top-4 -left-3 text-[#EF233C] drop-shadow-comic">
              <Icon size={36} stroke={3} fill="#EF233C">
                <path d="M3 7l4 5 5-7 5 7 4-5v11H3z" />
                <path d="M3 18h18" />
              </Icon>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="font-heavy text-[11px] tracking-wider text-black/70 uppercase">PUESTO 1 · INTOCABLE</div>
            <div className="font-display text-[30px] leading-none uppercase truncate">{name}</div>
            <div className="font-heavy text-[12px] text-black/80 mt-1">
              {reward}
            </div>
          </div>
          
          <div className="text-right flex-shrink-0">
            <div className="font-display text-[40px] leading-none">{pts}</div>
            <div className="font-heavy text-[10px] uppercase">PUNTOS</div>
            <div className="mt-1 inline-block bg-[#EF233C] text-white font-heavy text-[10px] px-1.5 py-[2px] border-2 border-black shadow-comic">
              ↑ +{trend}
            </div>
          </div>
        </div>
        
        {/* Footer info */}
        <div className="bg-black text-[#FFD60A] font-heavy text-[11px] px-3 py-1.5 flex items-center justify-between">
          <span className="uppercase">🏆 Ganó el reto del martes (¡PLAS!)</span>
          <span>★★★</span>
        </div>
      </div>
    </div>
  )
}
