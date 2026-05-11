import { Icon } from '../../atoms/Icon'

export interface ActionShootButtonProps {
  /** Acción al pulsar */
  onClick: () => void
  /** Clases adicionales */
  className?: string
  /** Texto principal */
  title?: string
  /** Texto secundario resaltado */
  highlightText?: string
}

/**
 * Organismo ActionShootButton: Botón principal de captura fotográfica.
 * Diseño asimétrico con gran impacto visual, iconos grandes y respuesta táctil cómic.
 */
export function ActionShootButton({
  onClick,
  className = '',
  title = 'HACER FOTO',
  highlightText = '(¡YA!)',
}: ActionShootButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full relative bg-[#1B6CFF] border-[4px] border-black rounded-md py-5 px-4 shadow-comic-xl btn-comic btn-comic-lg overflow-hidden text-left group ${className}`}
    >
      {/* Halftone Texture */}
      <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />
      
      <div className="relative flex items-center justify-between pointer-events-none">
        {/* Texts */}
        <div>
          <div className="font-heavy text-[11px] text-[#FFD60A] tracking-widest uppercase">
            PULSA AQUÍ ↓
          </div>
          <div className="font-display text-white text-[36px] leading-[0.95] mt-1 uppercase">
            {title}<br />
            <span className="text-[#FFD60A]">{highlightText}</span>
          </div>
        </div>
        
        {/* Camera Icon Container */}
        <div className="relative">
          <div className="w-20 h-20 bg-white border-[4px] border-black rounded-full flex items-center justify-center shadow-[inset_-4px_-4px_0_0_rgba(0,0,0,0.15)] group-active:translate-y-1 transition-transform">
            <Icon size={36} stroke={3}>
              <path d="M3 8h3l2-3h8l2 3h3v11H3z" />
              <circle cx="12" cy="13.5" r="3.6" />
            </Icon>
          </div>
          {/* Small red dot decoration */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#EF233C] border-[2.5px] border-black rounded-full shadow-comic" />
        </div>
      </div>
    </button>
  )
}
