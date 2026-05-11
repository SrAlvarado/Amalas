import { ReactNode } from 'react'

export interface NavItemProps {
  /** Icono a mostrar */
  icon: ReactNode
  /** Etiqueta de texto */
  label: string
  /** Si la pestaña está activa */
  isActive?: boolean
  /** Acción al pulsar */
  onClick?: () => void
  /** Clases adicionales */
  className?: string
}

/**
 * Molécula NavItem: Botón individual para la barra de navegación inferior.
 * Combina un icono con un texto y gestiona el estado visual activo.
 */
export function NavItem({
  icon,
  label,
  isActive = false,
  onClick,
  className = '',
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`relative py-2.5 flex flex-col items-center gap-1 transition-all btn-tiny group ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {/* Indicador superior activo */}
      {isActive && (
        <span className="absolute top-0 left-2 right-2 h-1 bg-black animate-in fade-in slide-in-from-top-1" />
      )}
      
      {/* Contenedor del icono */}
      <div className={`w-11 h-11 flex items-center justify-center border-[2.5px] border-black transition-colors ${isActive ? 'bg-[#FFD60A] shadow-comic' : 'bg-white'}`}>
        {icon}
      </div>
      
      {/* Texto */}
      <span className={`font-heavy text-[10px] tracking-wider transition-colors ${isActive ? 'text-black' : 'text-black/55 group-hover:text-black'}`}>
        {label}
      </span>
    </button>
  )
}
