export interface StepIndicatorProps {
  /** Paso actual (1-indexed) */
  currentStep: number
  /** Número total de pasos */
  totalSteps: number
  /** Clases adicionales */
  className?: string
}

/**
 * Molécula StepIndicator: Muestra el progreso por pasos (usado en Registro).
 * Utiliza números en cajas negras con bordes amarillos y una barra de conexión.
 */
export function StepIndicator({
  currentStep,
  totalSteps,
  className = '',
}: StepIndicatorProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <div className={`px-5 py-3 bg-black flex items-center gap-2 ${className}`}>
      {steps.map((step) => {
        const isCompleted = step < currentStep
        const isCurrent = step === currentStep
        
        return (
          <div key={step} className="flex-1 flex items-center gap-2">
            {/* Círculo/Cuadrado del paso */}
            <div 
              className={`w-7 h-7 border-[2.5px] border-[#FFD60A] flex items-center justify-center font-display text-[14px] transition-colors duration-300 ${
                isCompleted || isCurrent ? 'bg-[#FFD60A] text-black' : 'bg-black text-[#FFD60A]'
              }`}
            >
              {step}
            </div>
            
            {/* Línea de conexión */}
            {step < totalSteps && (
              <div 
                className={`flex-1 h-[3px] transition-colors duration-300 ${
                  isCompleted ? 'bg-[#FFD60A]' : 'bg-[#FFD60A]/30'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
