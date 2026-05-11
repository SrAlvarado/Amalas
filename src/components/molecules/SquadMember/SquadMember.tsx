import { Avatar } from '../../atoms/Avatar'
import type { AvatarFace } from '../../atoms/Avatar'

export interface SquadMemberProps {
  /** Nombre del miembro */
  name: string
  /** Cara del avatar */
  face: AvatarFace
  /** Si ya ha subido la foto */
  done?: boolean
  /** Si es el usuario actual */
  isYou?: boolean
  /** Clases adicionales */
  className?: string
}

/**
 * Molécula SquadMember: Representación individual de un miembro del equipo.
 * Muestra el estado de participación (check de listo) y el avatar.
 */
export function SquadMember({
  name,
  face,
  done = false,
  isYou = false,
  className = '',
}: SquadMemberProps) {
  return (
    <div className={`flex flex-col items-center gap-2 group ${className}`}>
      <div className="relative">
        <Avatar 
          face={face} 
          size="lg" 
          border 
          className={`transition-all duration-300 ${done ? 'grayscale-0' : 'grayscale'}`} 
        />
        
        {/* Status Badge */}
        {done && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#2B9348] border-[2px] border-black rounded-full flex items-center justify-center text-white shadow-comic animate-in zoom-in">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          </div>
        )}
      </div>
      
      <span className={`font-heavy text-[11px] tracking-wider uppercase text-center truncate w-full ${isYou ? 'text-[#1B6CFF]' : 'text-black'}`}>
        {isYou ? 'TÚ' : name}
      </span>
    </div>
  )
}
