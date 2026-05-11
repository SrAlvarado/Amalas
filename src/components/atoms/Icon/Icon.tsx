import type { ReactNode } from 'react'

export type IconSize = 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 32 | 36

export interface IconProps {
  /** Contenido SVG (paths, circles, etc.) */
  children: ReactNode
  /** Tamaño en px del viewBox cuadrado */
  size?: IconSize
  /** Grosor del trazo */
  stroke?: number
  /** Color de relleno (por defecto 'none') */
  fill?: string
  /** Clases extra para el elemento svg */
  className?: string
}

/**
 * Átomo base para todos los iconos de la app.
 * Renderiza un SVG 24×24 con los tokens de trazo del sistema cómic.
 * Los hijos deben ser elementos SVG válidos (path, circle, etc.).
 */
export function Icon({
  children,
  size = 24,
  stroke = 2.5,
  fill = 'none',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}
