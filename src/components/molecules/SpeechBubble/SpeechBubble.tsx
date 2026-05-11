import type { ReactNode } from 'react'

export interface SpeechBubbleProps {
  /** Contenido del bocadillo */
  children: ReactNode
  /** Dirección del pico */
  position?: 'top' | 'bottom' | 'left' | 'right'
  /** Variantes de color */
  variant?: 'white' | 'yellow' | 'red'
  /** Si debe mostrar el pico (legacy support) */
  hasTail?: boolean
  /** Clases adicionales */
  className?: string
}

/**
 * Molécula SpeechBubble: Bocadillo de texto estilo cómic.
 * Posee el pico característico y bordes negros gruesos.
 */
export function SpeechBubble({
  children,
  position = 'bottom',
  variant = 'white',
  hasTail = true,
  className = '',
}: SpeechBubbleProps) {
  const bgColor = {
    white: 'bg-white',
    yellow: 'bg-[#FFD60A]',
    red: 'bg-[#EF233C]',
  }[variant]

  const tailPosition = {
    top: 'top-[-10px] left-8 border-b-black border-l-transparent border-r-transparent border-t-transparent',
    bottom: 'bottom-[-10px] left-8 border-t-black border-l-transparent border-r-transparent border-b-transparent',
    left: 'left-[-10px] top-4 border-r-black border-t-transparent border-b-transparent border-l-transparent',
    right: 'right-[-10px] top-4 border-l-black border-t-transparent border-b-transparent border-r-transparent',
  }[position]

  return (
    <div className={`relative p-4 border-[3px] border-black shadow-comic ${bgColor} ${className}`}>
      <span className="font-heavy text-[13px] leading-tight block uppercase italic">
        {children}
      </span>
      
      {/* Pico del bocadillo */}
      {hasTail && <div className={`absolute w-0 h-0 border-[10px] ${tailPosition}`} />}
    </div>
  )
}
