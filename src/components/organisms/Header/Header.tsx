import { Icon } from '../../atoms/Icon'
import { ComicButton } from '../../atoms/ComicButton'

export interface HeaderProps {
  /** Racha actual del usuario */
  streak?: number
  /** Número de notificaciones pendientes */
  notifications?: number
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo Header: Barra superior de la aplicación.
 * Incluye el estado del sistema (falso), el logo "A MALAS" y widgets de racha/notificaciones.
 */
export function Header({
  streak = 0,
  notifications = 0,
  className = '',
}: HeaderProps) {
  return (
    <header className={`sticky top-0 z-30 bg-[#FFD60A] border-b-[3px] border-black ${className}`}>
      {/* Fake Status Bar */}
      <div className="status-bar">
        <span>9:41</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-4 h-2 bg-black rounded-sm" />
          <span>100%</span>
        </span>
      </div>
      
      {/* Main Header Content */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#FFD60A] relative overflow-hidden">
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 relative">
          <h1 className="font-display logo-stroke-sm text-[34px] leading-none tracking-wide select-none">
            A&nbsp;MALAS
          </h1>
          <span className="font-heavy text-[10px] bg-black text-[#FFD60A] px-1.5 py-[3px] rotate-[-6deg] -mt-3 shadow-comic">
            ¡PUM!
          </span>
        </div>
        
        {/* Widgets Section */}
        <div className="flex items-center gap-2 relative">
          {/* Streak Widget */}
          <div className="flex items-center gap-1 bg-white border-[2.5px] border-black px-2 py-1 shadow-comic font-heavy">
            <span className="text-[#EF233C]">
              <Icon size={16} fill="currentColor">
                <path d="M12 3c1 4 5 5 5 10a5 5 0 11-10 0c0-3 2-4 2-7 2 1 3 0 3-3z" />
              </Icon>
            </span>
            <span className="text-sm">{streak}</span>
          </div>
          
          {/* Notifications Button */}
          <button className="relative w-9 h-9 bg-white border-[2.5px] border-black flex items-center justify-center shadow-comic btn-comic btn-tiny">
            <Icon size={18}>
              <path d="M6 16V11a6 6 0 0112 0v5l2 2H4z" />
              <path d="M10 20a2 2 0 004 0" />
            </Icon>
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#EF233C] text-white border-2 border-black rounded-full text-[10px] font-black flex items-center justify-center animate-in zoom-in duration-300">
                {notifications}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
