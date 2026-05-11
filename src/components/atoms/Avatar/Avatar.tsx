export type AvatarFace = 'face-1' | 'face-2' | 'face-3' | 'face-4' | 'face-5' | 'face-6'
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps {
  /** Identificador de la cara del avatar */
  face: AvatarFace
  /** Tamaño del avatar */
  size?: AvatarSize
  /** Si debe mostrar borde negro grueso */
  border?: boolean
  /** Clases adicionales */
  className?: string
}

/**
 * Átomo Avatar: Representación circular de los personajes.
 * Utiliza un sistema de sprites o componentes SVG internos para las caras.
 */
export function Avatar({
  face,
  size = 'md',
  border = true,
  className = '',
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size]

  // Mock de las caras con colores y emojis para el MVP
  const faceContent = {
    'face-1': { bg: 'bg-[#FFD60A]', emoji: '😎' },
    'face-2': { bg: 'bg-[#EF233C]', emoji: '🤪' },
    'face-3': { bg: 'bg-[#1B6CFF]', emoji: '🤨' },
    'face-4': { bg: 'bg-[#2B9348]', emoji: '😏' },
    'face-5': { bg: 'bg-[#8338EC]', emoji: '😈' },
    'face-6': { bg: 'bg-[#FB5607]', emoji: '👻' },
  }[face]

  return (
    <div 
      className={`
        ${sizeClasses} 
        ${faceContent.bg} 
        ${border ? 'border-[3px] border-black shadow-comic' : ''} 
        rounded-full flex items-center justify-center overflow-hidden transition-transform active:scale-95
        ${className}
      `}
    >
      <span className={`select-none ${size === 'xl' ? 'text-4xl' : size === 'lg' ? 'text-3xl' : 'text-xl'}`}>
        {faceContent.emoji}
      </span>
      {/* Halftone overlay para textura cómic */}
      <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />
    </div>
  )
}
