import type { ReactNode } from 'react'

export type BadgeVariant = 'yellow' | 'red' | 'black' | 'white' | 'blue' | 'burst'

export interface ComicBadgeProps {
  /** Contenido del badge */
  children: ReactNode
  /** Variante de estilo cómic */
  variant?: BadgeVariant
  /** Si es true, aplica una rotación típica de cómic */
  tilt?: boolean
  /** Clases CSS adicionales */
  className?: string
  /** Nivel de sombra cómic */
  shadow?: 'none' | 'sm' | 'md' | 'lg'
}

/**
 * Átomo ComicBadge: Etiquetas de texto con estética de cómic.
 * Permite variantes de color y efectos de inclinación o ráfaga (burst).
 */
export function ComicBadge({
  children,
  variant = 'black',
  tilt = false,
  className = '',
  shadow = 'none',
}: ComicBadgeProps) {
  const variantClasses = {
    yellow: 'bg-[#FFD60A] text-black border-black',
    red: 'bg-[#EF233C] text-white border-black',
    black: 'bg-black text-[#FFD60A] border-[#FFD60A]',
    white: 'bg-white text-black border-black',
    blue: 'bg-[#1B6CFF] text-white border-black',
    burst: 'burst bg-[#FFD60A] text-black border-none',
  }

  const shadowClasses = {
    none: '',
    sm: 'shadow-comic',
    md: 'shadow-comic-lg',
    lg: 'shadow-comic-xl',
  }

  const baseClasses = variant === 'burst'
    ? 'flex items-center justify-center p-4'
    : 'inline-block font-heavy text-[11px] px-2 py-[3px] border-[2.5px]'

  const tiltClasses = tilt ? 'rotate-[-4deg]' : ''

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${shadowClasses[shadow]} ${tiltClasses} ${className}`

  return (
    <div className={combinedClasses}>
      {variant === 'burst' ? (
        <span className="font-display text-center leading-none px-1">
          {children}
        </span>
      ) : (
        children
      )}
    </div>
  )
}
