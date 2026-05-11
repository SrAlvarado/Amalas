import { InputHTMLAttributes, forwardRef } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Si es true, el borde se vuelve rojo */
  hasError?: boolean
  /** Clases adicionales */
  className?: string
}

/**
 * Átomo Input: Campo de texto básico con estética cómic.
 * Posee sombras duras y bordes negros gruesos.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, className = '', ...props }, ref) => {
    const baseClasses = `w-full bg-white border-[3px] px-3 py-3 font-heavy text-[14px] shadow-comic placeholder:text-black/30 focus:outline-none focus:bg-[#FFF7E0] transition-colors`
    const errorClasses = hasError ? 'border-[#EF233C]' : 'border-black'
    
    return (
      <input
        ref={ref}
        className={`${baseClasses} ${errorClasses} ${className}`}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
