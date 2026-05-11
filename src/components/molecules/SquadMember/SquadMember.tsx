import { Avatar, AvatarFace } from '../../atoms/Avatar'

export interface SquadMemberProps {
  /** Nombre a mostrar */
  name: string
  /** Cara del avatar */
  face: AvatarFace
  /** Indica si ya ha completado el reto */
  done?: boolean
  /** Si es el usuario actual */
  isYou?: boolean
  /** Clases adicionales */
  className?: string
}

/**
 * Molécula SquadMember: Representa a un compañero en la cuadrilla.
 * Muestra su avatar, nombre y estado de participación.
 */
export function SquadMember({
  name,
  face,
  done = false,
  isYou = false,
  className = '',
}: SquadMemberProps) {
  return (
    <div className={`relative bg-white border-[3px] border-black p-2 shadow-comic transition-transform hover:scale-105 ${isYou ? 'ring-2 ring-[#EF233C] ring-offset-2 ring-offset-[#F4ECD8]' : ''} ${className}`}>
      <Avatar face={face} size="md" isYou={false} className="w-full aspect-square mb-1">
        {!done && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="font-display text-white text-[14px]">?</span>
          </div>
        )}
        {done && (
          <div className="absolute bottom-1 right-1 bg-[#FFD60A] border-2 border-black px-1 font-black text-[9px] animate-in zoom-in duration-300">
            ✓
          </div>
        )}
      </Avatar>
      
      <div className="font-heavy text-[11px] text-center leading-tight uppercase truncate">
        {isYou ? 'TÚ' : name}
      </div>
    </div>
  )
}
