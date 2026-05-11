import { ReactNode } from 'react'

export interface AuthShellProps {
  /** Contenido principal (formularios, botones social) */
  children: ReactNode
  /** Cabecera opcional (AuthHeader) */
  header?: ReactNode
  /** Clases adicionales */
  className?: string
}

/**
 * Plantilla AuthShell: Estructura para páginas de acceso y registro.
 * Enfatiza el diseño móvil centrado con un fondo limpio y enfoque en el contenido.
 */
export function AuthShell({
  children,
  header,
  className = '',
}: AuthShellProps) {
  return (
    <div className={`min-h-screen max-w-md mx-auto bg-[#F4ECD8] border-x-[3px] border-black shadow-2xl relative flex flex-col ${className}`}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 stripes-yellow opacity-20 pointer-events-none" />
      
      {/* Header section */}
      {header && <div className="relative z-10">{header}</div>}
      
      {/* Main content area */}
      <main className="flex-1 relative z-10 px-6 py-4">
        {children}
      </main>
      
      {/* iOS Home Indicator space */}
      <div className="h-8 flex justify-center items-center">
        <div className="w-28 h-1 bg-black/20 rounded-full" />
      </div>
    </div>
  )
}
