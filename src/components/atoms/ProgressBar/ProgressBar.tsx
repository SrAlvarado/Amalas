export interface ProgressBarProps {
  /** Valor actual del progreso (0 a 100) */
  progress: number
  /** Variante de color de la barra */
  variant?: 'yellow' | 'red' | 'blue'
  /** Altura de la barra */
  size?: 'sm' | 'md' | 'lg'
  /** Clases adicionales */
  className?: string
}

/**
 * Átomo ProgressBar: Barra de progreso con bordes negros gruesos.
 * Se usa en el temporizador del reto y en el progreso de votación.
 */
export function ProgressBar({
  progress,
  variant = 'yellow',
  size = 'md',
  className = '',
}: ProgressBarProps) {
  const variantClasses = {
    yellow: 'bg-[#FFD60A]',
    red: 'bg-[#EF233C]',
    blue: 'bg-[#1B6CFF]',
  }

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  }

  // Asegurar que el progreso esté entre 0 y 100
  const clampedProgress = Math.max(0, Math.min(100, progress))

  return (
    <div
      className={`w-full bg-black/30 border-t-[3px] border-black relative overflow-hidden ${sizeClasses[size]} ${className}`}
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full transition-all duration-500 ease-out ${variantClasses[variant]}`}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  )
}
