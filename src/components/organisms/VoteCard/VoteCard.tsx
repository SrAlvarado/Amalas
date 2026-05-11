import { useState } from 'react'
import { Avatar } from '../../atoms/Avatar'
import type { AvatarFace } from '../../atoms/Avatar'
import { Icon } from '../../atoms/Icon'

export interface VoteCardProps {
  /** Nombre del compañero */
  name: string
  /** Cara del avatar */
  face: AvatarFace
  /** Tema o pose capturada */
  pose: string
  /** Hora de subida */
  uploadTime: string
  /** Voto actual si existe */
  currentVote?: string | null
  /** Callback al votar */
  onVote?: (value: string) => void
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo VoteCard: Tarjeta interactiva para el sistema de votación.
 * Diseño estilo polaroid gamberra con botones de puntos Eurovisión.
 */
export function VoteCard({
  name,
  face,
  pose,
  uploadTime,
  currentVote = null,
  onVote,
  className = '',
}: VoteCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const voteOptions = [
    { label: '1', value: '1', color: 'bg-white' },
    { label: '2', value: '2', color: 'bg-white' },
    { label: '3', value: '3', color: 'bg-[#FFD60A]' },
    { label: 'PB', value: 'PB', color: 'bg-[#EF233C]', isPuesBien: true },
  ]

  return (
    <div 
      className={`bg-white border-[3.5px] border-black p-3 shadow-comic transition-all duration-300 ${isHovered ? 'rotate-[-1deg] scale-[1.01]' : 'rotate-[1deg]'} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Info */}
      <div className="flex items-center justify-between mb-3 border-b-2 border-black/10 pb-2">
        <div className="flex items-center gap-2">
          <Avatar face={face} size="sm" border={false} />
          <span className="font-display text-[16px] uppercase">{name}</span>
        </div>
        <span className="font-heavy text-[9px] opacity-40 uppercase">{uploadTime}</span>
      </div>

      {/* Photo Placeholder / Image */}
      <div className="relative aspect-[4/5] bg-zinc-100 border-[3px] border-black overflow-hidden flex items-center justify-center">
        {/* Placeholder gamberro */}
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="text-center p-6 space-y-2 opacity-20 group-hover:opacity-40 transition-opacity">
          <Icon size={40}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></Icon>
          <p className="font-display text-[12px] uppercase">{pose}</p>
        </div>
        
        {/* Sticker 'Pues bien' si está activo */}
        {currentVote === 'PB' && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center animate-in zoom-in duration-300">
            <div className="bg-[#EF233C] text-white border-[3px] border-black px-4 py-2 rotate-[-12deg] shadow-comic font-display text-[24px]">
              ¡PUES BIEN!
            </div>
          </div>
        )}
      </div>

      {/* Vote Controls */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {voteOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onVote?.(opt.value)}
            className={`
              h-12 border-[3px] border-black flex items-center justify-center transition-all active:translate-y-1 active:shadow-none
              ${opt.color} 
              ${currentVote === opt.value ? 'shadow-none translate-y-1 ring-2 ring-black ring-offset-2' : 'shadow-comic'}
              ${opt.isPuesBien ? 'text-white' : 'text-black'}
            `}
          >
            <span className="font-display text-[20px] leading-none">
              {opt.isPuesBien ? '😑' : opt.label}
            </span>
          </button>
        ))}
      </div>

      {/* Legend for Pues Bien */}
      <div className="mt-2 text-center">
        <span className="font-heavy text-[8px] text-black/30 uppercase tracking-tighter italic">
          PB = Comodín "Pues bien" (-1 punto)
        </span>
      </div>
    </div>
  )
}
