import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Input } from '../../atoms/Input'
import type { InputProps } from '../../atoms/Input'

export interface FormFieldProps extends InputProps {
  /** Etiqueta que aparece sobre el input */
  label: string
  /** Mensaje de error a mostrar debajo */
  error?: string
  /** Texto de ayuda opcional */
  hint?: ReactNode
  /** Icono opcional al inicio */
  icon?: ReactNode
}

/**
 * Molécula FormField: Combina un label, un input y un mensaje de error.
 * Sigue la estética cómic con tipografía heavy y colores de contraste.
 */
export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, hint, icon, id, className = '', ...props }, ref) => {
    const hasError = !!error
    
    return (
      <div className={`flex flex-col gap-2 w-full ${className}`}>
        <label 
          htmlFor={id} 
          className="font-heavy text-[11px] text-black tracking-widest uppercase ml-1"
        >
          {label}
        </label>
        
        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-3 z-10 text-black/50">
              {icon}
            </span>
          )}
          <Input 
            ref={ref}
            id={id}
            hasError={hasError}
            className={icon ? 'pl-10' : ''}
            {...props}
          />
        </div>
        
        {error && (
          <span className="font-heavy text-[10px] text-[#EF233C] uppercase ml-1 animate-in slide-in-from-top-1">
            {error}
          </span>
        )}
        
        {hint && !error && (
          <span className="font-heavy text-[10px] text-black/40 uppercase ml-1">
            {hint}
          </span>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'
