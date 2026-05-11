import { Avatar } from '../../atoms/Avatar'
import type { AvatarFace } from '../../atoms/Avatar'

export interface RankItemProps {
  /** Posición en el ranking */
  pos: number
  /** Nombre del usuario */
  name: string
  /** Puntos actuales */
  pts: number
  /** Cara del avatar */
  face: AvatarFace
  /** Tendencia (-1, 0, 1) */
  trend?: number
  /** Si es el usuario actual */
  isYou?: boolean
  /** Clases adicionales */
  className?: string
}

/**
 * Molécula RankItem: Fila individual de la clasificación.
 * Muestra posición, avatar, nombre y puntos con estilo cómic.
 */
export function RankItem({
  pos,
  name,
  pts,
  face,
  trend = 0,
  isYou = false,
  className = '',
}: RankItemProps) {
  return (
    <div 
      className={`flex items-center gap-3 p-3 border-[2.5px] border-black shadow-comic transition-transform hover:scale-[1.02] ${isYou ? 'bg-[#FFD60A]' : 'bg-white'} ${className}`}
    >
      {/* Position */}
      <div className="w-8 h-8 flex items-center justify-center bg-black text-white font-display text-lg">
        {pos}
      </div>
      
      {/* Avatar */}
      <Avatar face={face} size="md" border={false} />
      
      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="font-display text-[16px] leading-none uppercase truncate">
          {name} {isYou && <span className="text-[10px] font-heavy">(TÚ)</span>}
        </div>
        <div className="font-heavy text-[11px] text-black/40 uppercase">
          NIVEL GAMBERRO
        </div>
      </div>
      
      {/* Points */}
      <div className="text-right">
        <div className="font-display text-[20px] leading-none">
          {pts}
        </div>
        <div className="font-heavy text-[9px] uppercase">
          PUNTOS
        </div>
      </div>
      
      {/* Trend Indicator (simplified) */}
      {trend !== 0 && (
        <div className={`w-2 h-2 rounded-full ${trend > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
      )}
    </div>
  )
}
