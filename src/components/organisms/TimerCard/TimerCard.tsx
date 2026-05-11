import { ProgressBar } from '../../atoms/ProgressBar'

export interface TimerCardProps {
  /** Horas restantes */
  hours: number
  /** Minutos restantes */
  minutes: number
  /** Segundos restantes */
  seconds: number
  /** Progreso de la barra (0-100) */
  progress: number
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo TimerCard: Muestra la cuenta atrás para el reto.
 * Diseño en rojo agresivo con textura halftone y tipografía tabular para los números.
 */
export function TimerCard({
  hours,
  minutes,
  seconds,
  progress,
  className = '',
}: TimerCardProps) {
  const pad = (n: number) => n.toString().padStart(2, '0')

  return (
    <div className={`relative bg-[#EF233C] border-[3.5px] border-black rounded-md shadow-comic-lg overflow-hidden ${className}`}>
      {/* Halftone Texture */}
      <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />
      
      {/* Content */}
      <div className="relative px-4 py-3 flex items-center justify-between">
        <div>
          <div className="font-heavy text-[11px] text-[#FFD60A] tracking-widest uppercase">
            ¡EL TIEMPO CORRE!
          </div>
          <div className="font-display text-white text-[44px] leading-none mt-1 tabular-nums">
            {pad(hours)}<span className="text-[#FFD60A]">:</span>{pad(minutes)}<span className="text-[#FFD60A]">:</span>{pad(seconds)}
          </div>
          <div className="font-heavy text-[11px] text-white/90 mt-1 uppercase">
            restantes para subir tu foto
          </div>
        </div>
        
        {/* Burst decoration */}
        <div className="w-16 h-16 burst bg-[#FFD60A] flex items-center justify-center -rotate-6 shadow-comic">
          <span className="font-display text-black text-[12px] text-center leading-none">
            ¡YA<br />VA!
          </span>
        </div>
      </div>
      
      {/* Progress bar */}
      <ProgressBar 
        progress={progress} 
        variant="yellow" 
        size="md" 
        className="border-t-[3px] border-black" 
      />
    </div>
  )
}
