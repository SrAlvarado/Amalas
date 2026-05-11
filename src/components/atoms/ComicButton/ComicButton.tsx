import type { ReactNode, ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'white' | 'black'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ComicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Contenido del botón */
  children: ReactNode
  /** Variante de estilo */
  variant?: ButtonVariant
  /** Tamaño del botón */
  size?: ButtonSize
  /** Si es true, añade una textura halftone */
  halftone?: boolean
  /** Clases CSS adicionales */
  className?: string
  /** Icono opcional a la izquierda */
  leftIcon?: ReactNode
  /** Icono opcional a la derecha */
  rightIcon?: ReactNode
}

/**
 * Átomo ComicButton: Botones con estética de cómic, sombras duras y feedback táctil.
 * Encapsula la lógica de variantes de color y tamaños del sistema.
 */
export function ComicButton({
  children,
  variant = 'primary',
  size = 'md',
  halftone = false,
  className = '',
  leftIcon,
  rightIcon,
  ...props
}: ComicButtonProps) {
  const variantClasses = {
    primary: 'bg-[#1B6CFF] text-white border-black shadow-comic-lg',
    secondary: 'bg-[#FFD60A] text-black border-black shadow-comic-lg',
    danger: 'bg-[#EF233C] text-white border-black shadow-comic-lg',
    white: 'bg-white text-black border-black shadow-comic',
    black: 'bg-black text-[#FFD60A] border-[#FFD60A] shadow-comic',
  }

  const sizeClasses = {
    sm: 'py-2 px-4 text-[12px] btn-tiny',
    md: 'py-3 px-6 text-[16px] btn-comic',
    lg: 'py-4 px-8 text-[22px] btn-comic-lg shadow-comic-xl',
  }

  const baseClasses = `relative border-[3.5px] rounded-md font-display overflow-hidden text-center flex items-center justify-center gap-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={combinedClasses} {...props}>
      {halftone && (
        <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />
      )}
      {leftIcon && <span className="relative flex-shrink-0">{leftIcon}</span>}
      <span className="relative z-10">{children}</span>
      {rightIcon && <span className="relative flex-shrink-0">{rightIcon}</span>}
    </button>
  )
}
