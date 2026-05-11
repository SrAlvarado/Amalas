import type { ReactNode } from 'react'

export type IconSize = 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 32 | 36 | 40 | 48

export interface IconProps {
  /** El SVG o contenido del icono */
  children: ReactNode
  /** Tamaño en píxeles (basado en escala estándar) */
  size?: IconSize
  /** Color de relleno */
  fill?: string
  /** Grosor del trazo */
  stroke?: number
  /** Clases adicionales */
  className?: string
}

/**
 * Átomo Icon: Envoltorio para iconos SVG.
 * Centraliza el tamaño y el estilo de los trazos para mantener coherencia.
 */
export function Icon({
  children,
  size = 24,
  fill = 'none',
  stroke = 2,
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
      className={`inline-block vertical-middle ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}
