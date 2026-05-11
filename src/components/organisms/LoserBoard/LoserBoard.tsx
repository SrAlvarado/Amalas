import { Avatar } from '../../atoms/Avatar'
import type { AvatarFace } from '../../atoms/Avatar'

export interface LoserBoardProps {
  /** Posición en el ranking (generalmente la última) */
  pos: number
  /** Nombre del perdedor */
  name: string
  /** Puntos actuales */
  pts: number
  /** Cara del avatar */
  face: AvatarFace
  /** Título del castigo */
  punishmentTitle: string
  /** Descripción del castigo */
  punishmentDesc: string
  /** Mensaje de vergüenza adicional */
  shameMessage?: string
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo LoserBoard: Cuadro de castigo para el último del ranking.
 * Estética de "muro de la vergüenza" con colores apagados y tipografía agresiva.
 */
export function LoserBoard({
  pos,
  name,
  pts,
  face,
  punishmentTitle,
  punishmentDesc,
  className = '',
}: LoserBoardProps) {
  return (
    <div className={`relative border-[4px] border-black bg-[#E5E5E5] p-6 shadow-comic-xl overflow-hidden ${className}`}>
      {/* Texture */}
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
      
      {/* Header Badge */}
      <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-display text-[14px] uppercase rotate-0 origin-top-right">
        ¡EL CASTIGADO!
      </div>

      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="relative">
          <Avatar face={face} size="xl" className="grayscale border-black" />
          <div className="absolute -top-2 -left-2 bg-black text-white w-10 h-10 flex items-center justify-center font-display text-xl rotate-[-12deg] shadow-comic">
            #{pos}
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-display text-[28px] leading-none uppercase mb-1">{name}</h3>
          <p className="font-heavy text-[12px] text-black/50 uppercase">Con {pts} puntos (¡Vaya tela!)</p>
        </div>

        <div className="w-full bg-white border-[3px] border-black p-4 mt-2 relative rotate-[1deg]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EF233C] text-white font-heavy text-[10px] px-2 py-0.5 uppercase tracking-tighter border-[2px] border-black">
            CASTIGO DEL MES
          </div>
          <div className="font-display text-[20px] text-[#EF233C] leading-tight uppercase text-center mt-1">
            {punishmentTitle}
          </div>
          <p className="font-heavy text-[11px] text-center mt-2 opacity-60 uppercase">
            {punishmentDesc}
          </p>
        </div>
      </div>
    </div>
  )
}
