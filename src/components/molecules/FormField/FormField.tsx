import { ReactNode, forwardRef } from 'react'
import { Input, InputProps } from '../../atoms/Input'

export interface FormFieldProps extends InputProps {
  /** Etiqueta del campo */
  label: string
  /** Texto de ayuda o pista (arriba a la derecha) */
  hint?: ReactNode
  /** Mensaje de error (abajo) */
  error?: string
}

/**
 * Molécula FormField: Combina un Label, un Input y mensajes de Error/Hint.
 * Es la unidad básica para construir formularios en la app.
 */
export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, hint, error, ...inputProps }, ref) => {
    return (
      <div className="block w-full">
        <div className="font-heavy text-[11px] tracking-wider mb-1 flex items-center justify-between">
          <label className="uppercase">{label}</label>
          {hint && <span className="text-black/55 font-heavy text-[10px]">{hint}</span>}
        </div>
        
        <Input 
          ref={ref} 
          hasError={!!error} 
          {...inputProps} 
        />
        
        {error && (
          <div className="font-heavy text-[10px] text-[#EF233C] mt-1 animate-in fade-in slide-in-from-top-1">
            ⚠ {error}
          </div>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'
