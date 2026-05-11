import type { ReactNode } from 'react'

export type AvatarFace = 'face-1' | 'face-2' | 'face-3' | 'face-4' | 'face-5' | 'face-6'
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps {
  /** Estilo de fondo predefinido (gradiente cómic) */
  face?: AvatarFace
  /** Tamaño del avatar */
  size?: AvatarSize
  /** Contenido opcional (ej. icono o letra si no hay face) */
  children?: ReactNode
  /** Si es true, añade el borde resaltado del usuario actual */
  isYou?: boolean
  /** Clases CSS adicionales */
  className?: string
  /** URL de imagen (si se quiere usar imagen real en el futuro) */
  src?: string
  /** Texto alternativo */
  alt?: string
}

/**
 * Átomo Avatar: Representación visual de un usuario con estilos cómic.
 * Soporta gradientes predefinidos en el sistema de diseño.
 */
export function Avatar({
  face,
  size = 'md',
  children,
  isYou = false,
  className = '',
  src,
  alt = 'Usuario',
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 border-[2px]',
    md: 'w-11 h-11 border-[2.5px]',
    lg: 'w-16 h-16 border-[3px]',
    xl: 'w-20 h-20 border-[3.5px]',
  }

  const baseClasses = `relative rounded-none border-black flex items-center justify-center overflow-hidden flex-shrink-0`
  const youClasses = isYou ? 'ring-2 ring-[#EF233C] ring-offset-2 ring-offset-[#F4ECD8]' : ''
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${face || 'bg-white'} ${youClasses} ${className}`

  return (
    <div className={combinedClasses} aria-label={alt}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        children || null
      )}
    </div>
  )
}
