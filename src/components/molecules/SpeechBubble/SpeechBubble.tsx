import { ReactNode } from 'react'

export interface SpeechBubbleProps {
  /** Contenido del bocadillo */
  children: ReactNode
  /** Si es true, añade la cola del bocadillo abajo */
  hasTail?: boolean
  /** Clases adicionales */
  className?: string
  /** Variante de color (fondo blanco por defecto) */
  variant?: 'white' | 'yellow'
}

/**
 * Molécula SpeechBubble: Contenedor con forma de bocadillo de cómic.
 * Se usa para mensajes del sistema, advertencias o reglas.
 */
export function SpeechBubble({
  children,
  hasTail = false,
  className = '',
  variant = 'white',
}: SpeechBubbleProps) {
  const variantClasses = {
    white: 'bg-white border-black',
    yellow: 'bg-[#FFD60A] border-black',
  }

  const baseClasses = `relative border-[3px] rounded-2xl px-4 py-3 shadow-comic`
  const tailClasses = hasTail ? 'tail-down' : ''
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${tailClasses} ${className}`

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}
