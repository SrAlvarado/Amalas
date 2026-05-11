import { SquadMember, SquadMemberProps } from '../../molecules/SquadMember'

export interface SquadGridProps {
  /** Lista de miembros del grupo */
  members: SquadMemberProps[]
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo SquadGrid: Cuadrícula que muestra el estado de la cuadrilla.
 * Incluye un título con tipografía cómic y el conteo de quiénes están listos.
 */
export function SquadGrid({
  members,
  className = '',
}: SquadGridProps) {
  const readyCount = members.filter(m => m.done).length
  const totalCount = members.length

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <h3 className="font-display text-[20px] tracking-wide uppercase">
          LA CUADRILLA
        </h3>
        <span className="font-heavy text-[12px] text-black/60 uppercase">
          {readyCount} / {totalCount} LISTOS
        </span>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {members.map((member, index) => (
          <SquadMember 
            key={member.name + index}
            {...member} 
          />
        ))}
      </div>
    </div>
  )
}
