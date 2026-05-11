import { ComicBadge } from '../../atoms/ComicBadge'
import { Avatar } from '../../atoms/Avatar'

export interface ThemeCardProps {
  /** Título del tema (ej. ¡POSTURA DE YOGA!) */
  title: string
  /** Descripción del tema */
  description: string
  /** Texto del burst (ej. ¡ZAS! +3pts) */
  burstText?: string
  /** Nombre del proponente */
  proposedBy?: string
  /** Avatares de amigos que ya han participado */
  friendFaces?: string[]
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo ThemeCard: Panel que muestra el reto del día.
 * Utiliza texturas halftone, tipografía gigante y elementos burst para impacto visual.
 */
export function ThemeCard({
  title,
  description,
  burstText = '¡ZAS!\n+3pts',
  proposedBy = 'LAIA',
  friendFaces = ['face-1', 'face-2', 'face-3'],
  className = '',
}: ThemeCardProps) {
  return (
    <div className={`relative bg-white border-[3.5px] border-black shadow-comic-xl rounded-md overflow-hidden ${className}`}>
      {/* Background Texture */}
      <div className="absolute inset-0 halftone-light opacity-60 pointer-events-none" />
      
      {/* Content */}
      <div className="relative px-4 pt-4 pb-3">
        <ComicBadge variant="black" className="mb-2">TEMA DE HOY</ComicBadge>
        
        <div className="relative">
          <h2 className="font-display text-[44px] leading-[0.95] text-black uppercase" dangerouslySetInnerHTML={{ __html: title }} />
          
          {/* Burst Star */}
          {burstText && (
            <div className="absolute -right-2 -top-1 w-20 h-20 burst bg-[#1B6CFF] flex items-center justify-center wobble">
              <span className="font-display text-white text-[18px] leading-none text-center px-1 whitespace-pre-line">
                {burstText}
              </span>
            </div>
          )}
        </div>
        
        <p className="font-heavy text-[13px] text-black/75 mt-2">
          {description}
        </p>
      </div>
      
      {/* Bottom strip */}
      <div className="stripes-yellow border-t-[3.5px] border-black px-3 py-2 flex items-center justify-between">
        <div className="font-heavy text-[12px]">
          PROPUESTO POR <span className="bg-black text-white px-1.5 py-[1px] ml-1 uppercase">@{proposedBy}</span>
        </div>
        
        <div className="flex -space-x-2">
          {friendFaces.slice(0, 3).map((face, i) => (
            <Avatar key={i} face={face as any} size="sm" className="w-6 h-6" />
          ))}
          {friendFaces.length > 3 && (
            <div className="w-6 h-6 rounded-full bg-white border-2 border-black flex items-center justify-center text-[9px] font-black z-10">
              +{friendFaces.length - 3}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
