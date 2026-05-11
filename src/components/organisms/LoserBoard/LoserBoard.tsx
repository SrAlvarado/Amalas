import { Icon } from '../../atoms/Icon'
import { Avatar, AvatarFace } from '../../atoms/Avatar'

export interface LoserBoardProps {
  /** Posición (normalmente la última) */
  pos: number
  /** Nombre del perdedor */
  name: string
  /** Puntos actuales */
  pts: number
  /** Cara del avatar */
  face: AvatarFace
  /** Mensaje de humillación (ej. 3 "PUES BIEN" esta semana) */
  shameMessage?: string
  /** Castigo actual */
  punishmentTitle: string
  /** Descripción del castigo */
  punishmentDesc: string
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo LoserBoard: Tarjeta roja de humillación para el último del ranking.
 * Incluye avatares en escala de grises y el detalle del castigo a pagar.
 */
export function LoserBoard({
  pos,
  name,
  pts,
  face,
  shameMessage = '3 "PUES BIEN" esta semana 💀',
  punishmentTitle,
  punishmentDesc,
  className = '',
}: LoserBoardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Loser Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-[#EF233C] text-white font-display text-[16px] px-3 py-1 rotate-[3deg] border-[2.5px] border-black shadow-comic">
        ¡PERDEDOR!
      </div>
      
      <div className="relative bg-[#EF233C] border-[4px] border-black rounded-md shadow-comic-xl overflow-hidden">
        {/* Halftone Texture */}
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
        
        {/* Content */}
        <div className="relative px-4 pt-6 pb-3 flex items-center gap-3">
          {/* Posición en negro */}
          <div className="w-16 h-16 bg-black text-white font-display text-[34px] flex items-center justify-center border-[3.5px] border-black flex-shrink-0">
            {pos}
          </div>
          
          {/* Avatar en escala de grises */}
          <div className="relative flex-shrink-0">
            <Avatar face={face} size="lg" className="border-[3.5px] border-black grayscale contrast-125" />
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-comic">
              <Icon size={14} stroke={2.5}>
                <path d="M5 11a7 7 0 0114 0v4a2 2 0 01-2 2h-1v3h-2v-3h-4v3H8v-3H7a2 2 0 01-2-2z" />
                <circle cx="9" cy="12" r="1.4" fill="currentColor" />
                <circle cx="15" cy="12" r="1.4" fill="currentColor" />
              </Icon>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="font-heavy text-[10px] tracking-widest text-[#FFD60A] uppercase">FAROLILLO ROJO</div>
            <div className="font-display text-white text-[28px] leading-none uppercase truncate">{name}</div>
            <div className="font-heavy text-[11px] text-white/85 mt-0.5">{shameMessage}</div>
          </div>
          
          <div className="text-right text-white flex-shrink-0">
            <div className="font-display text-[36px] leading-none">{pts}</div>
            <div className="font-heavy text-[10px] uppercase">PUNTOS</div>
          </div>
        </div>
        
        {/* Punishment Sign */}
        <div className="relative mx-3 mb-3">
          <div className="bg-[#FFD60A] border-[3.5px] border-black p-2.5 rotate-[-1.5deg] shadow-[4px_4px_0_0_#000]">
            <div className="font-heavy text-[10px] tracking-widest text-black/70 mb-0.5 uppercase">CASTIGO ACTUAL</div>
            <div className="font-display text-[22px] leading-tight text-black uppercase">
              {punishmentTitle}
            </div>
            <div className="font-heavy text-[11px] mt-1.5">
              <span className="bg-black text-[#FFD60A] px-1.5 uppercase">SE EJECUTA</span> {punishmentDesc}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
