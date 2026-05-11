import { SquadMember } from '../../molecules/SquadMember'
import type { SquadMemberProps } from '../../molecules/SquadMember'

export interface SquadGridProps {
  /** Lista de miembros a mostrar */
  members: SquadMemberProps[]
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo SquadGrid: Cuadrícula que muestra el estado de todos los miembros.
 * Incluye un contador de progreso ("listos") con estilo de progreso de misión.
 */
export function SquadGrid({
  members,
  className = '',
}: SquadGridProps) {
  const readyCount = members.filter(m => m.done).length
  const totalCount = members.length

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Grid Header / Counter */}
      <div className="flex items-center justify-between px-1">
        <h3 className="font-display text-[22px] leading-none uppercase">TU CUADRILLA</h3>
        <div className="bg-black text-white px-2.5 py-1 font-display text-[16px] shadow-comic rotate-1">
          {readyCount}/{totalCount} LISTOS
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-3 gap-y-6 gap-x-2 bg-white/40 border-[3px] border-black p-5 shadow-comic relative overflow-hidden">
        {/* Background decorative dots */}
        <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />
        
        {members.map((member, index) => (
          <SquadMember 
            key={`${member.name}-${index}`}
            {...member} 
          />
        ))}
      </div>
      
      {readyCount === totalCount && totalCount > 0 && (
        <div className="text-center font-heavy text-[10px] text-[#2B9348] tracking-widest uppercase animate-bounce mt-2">
          ¡TODOS HAN CUMPLIDO!
        </div>
      )}
    </div>
  )
}
