import { SpeechBubble } from '../../molecules/SpeechBubble'

export interface AuthHeaderProps {
  /** Título de la página (ej. ¡HOLA!) */
  title: string
  /** Mensaje del bocadillo */
  message: string
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo AuthHeader: Cabecera para las páginas de login/registro.
 * Muestra el logo gigante y un mensaje en bocadillo de cómic.
 */
export function AuthHeader({
  title,
  message,
  className = '',
}: AuthHeaderProps) {
  return (
    <div className={`pt-8 pb-4 px-6 text-center ${className}`}>
      {/* Big Logo */}
      <div className="relative inline-block mb-6">
        <h1 className="font-display logo-stroke text-[64px] leading-none tracking-tighter drop-shadow-comic">
          A&nbsp;MALAS
        </h1>
        <div className="absolute -top-3 -right-6 bg-[#EF233C] text-white font-heavy text-[12px] px-2 py-1 rotate-12 shadow-comic border-2 border-black">
          BETA
        </div>
      </div>
      
      {/* Welcome Bubble */}
      <div className="max-w-[280px] mx-auto text-left">
        <SpeechBubble hasTail variant="yellow" className="rotate-[-2deg]">
          <div className="font-display text-[22px] leading-none mb-1 uppercase">{title}</div>
          <div className="font-heavy text-[13px] leading-snug text-black/80">
            {message}
          </div>
        </SpeechBubble>
      </div>
    </div>
  )
}
