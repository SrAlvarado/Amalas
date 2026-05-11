import { Avatar, AvatarFace } from '../../atoms/Avatar'

export interface RankItemProps {
  /** Posición en el ranking */
  pos: number
  /** Nombre del usuario */
  name: string
  /** Puntos actuales */
  pts: number
  /** Cara del avatar */
  face: AvatarFace
  /** Tendencia respecto a ayer (positivo o negativo) */
  trend?: number
  /** Si es el usuario actual */
  isYou?: boolean
  /** Clases adicionales */
  className?: string
}

/**
 * Molécula RankItem: Fila individual para el ranking (El Muro).
 * Muestra posición, avatar, nombre, tendencia y puntuación total.
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
  const trendText = trend > 0 
    ? `↑ +${trend} vs ayer` 
    : trend < 0 
      ? `↓ ${trend} vs ayer` 
      : '— igual'

  return (
    <div className={`relative bg-white border-[3.5px] border-black shadow-comic flex items-center gap-3 p-2.5 transition-all hover:-translate-y-1 ${isYou ? 'ring-2 ring-[#1B6CFF] ring-offset-2 ring-offset-[#F4ECD8]' : ''} ${className}`}>
      {/* Posición */}
      <div className="w-12 h-12 bg-black text-white font-display text-[24px] flex items-center justify-center flex-shrink-0">
        {pos}
      </div>
      
      {/* Avatar */}
      <Avatar face={face} size="md" className="border-[3px] border-black" />
      
      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-heavy text-[14px] truncate uppercase">{name}</span>
          {isYou && (
            <span className="bg-[#1B6CFF] text-white font-black text-[9px] px-1.5 py-[1px] flex-shrink-0">
              TÚ
            </span>
          )}
        </div>
        <div className={`font-heavy text-[10px] ${trend > 0 ? 'text-green-600' : trend < 0 ? 'text-[#EF233C]' : 'text-black/55'}`}>
          {trendText}
        </div>
      </div>
      
      {/* Puntos */}
      <div className="text-right flex-shrink-0">
        <div className="font-display text-[22px] leading-none">{pts}</div>
        <div className="font-heavy text-[9px] text-black/55">PTS</div>
      </div>
    </div>
  )
}
