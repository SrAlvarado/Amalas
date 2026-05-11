import { Icon } from '../../atoms/Icon'
import { Avatar, AvatarFace } from '../../atoms/Avatar'

export interface VoteCardProps {
  /** Nombre del usuario a votar */
  name: string
  /** Cara del avatar */
  face: AvatarFace
  /** Pose de yoga realizada (texto) */
  pose: string
  /** Hora de subida (formateada) */
  uploadTime: string
  /** Voto actual seleccionado (null, '1', '2', '3', 'PB') */
  currentVote: string | null
  /** Callback al votar */
  onVote: (vote: string) => void
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo VoteCard: Tarjeta interactiva para el juicio de fotos.
 * Muestra la "foto" (placeholder con silueta), datos del usuario y controles de votación.
 * Incluye el botón especial de castigo "PUES BIEN".
 */
export function VoteCard({
  name,
  face,
  pose,
  uploadTime,
  currentVote,
  onVote,
  className = '',
}: VoteCardProps) {
  const voteButtons = [
    { value: '3', label: 'PEDAZO FOTO', bg: 'vote-bg-3' },
    { value: '2', label: 'BIEN BIEN', bg: 'vote-bg-2' },
    { value: '1', label: 'BUENO… VALE', bg: 'vote-bg-1' },
  ]

  return (
    <div className={`bg-white border-[3.5px] border-black shadow-comic-lg rounded-md overflow-hidden ${className}`}>
      {/* Photo Area */}
      <div className="relative">
        <div className={`w-full aspect-[4/5] ${face} relative overflow-hidden border-b-[3.5px] border-black`}>
          <div className="absolute inset-0 halftone-light opacity-50" />
          
          {/* Placeholder silhouette/text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-white/85 text-[28px] text-center leading-tight drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)] uppercase">
              FOTO DE<br />{name}
            </div>
          </div>
          
          {/* Pose tag */}
          <div className="absolute top-2 left-2 bg-black text-[#FFD60A] font-heavy text-[10px] px-1.5 py-[3px] rotate-[-4deg] shadow-comic">
            {pose.toUpperCase()}
          </div>
          
          {/* Time tag */}
          <div className="absolute top-2 right-2 bg-white border-[2.5px] border-black font-heavy text-[10px] px-1.5 py-[3px] shadow-comic">
            {uploadTime}
          </div>
          
          {/* Comic sound burst */}
          <div className="absolute bottom-3 right-3 w-14 h-14 burst bg-[#FFD60A] flex items-center justify-center rotate-[8deg] shadow-comic">
            <span className="font-display text-black text-[12px]">¡PLAS!</span>
          </div>
        </div>
        
        {/* Name strip */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#FFD60A] border-b-[3.5px] border-black">
          <div className="flex items-center gap-2">
            <Avatar face={face} size="sm" className="w-7 h-7 border-[2.5px] border-black" />
            <div>
              <div className="font-heavy text-[13px] leading-none uppercase">@{name.toLowerCase()}</div>
              <div className="font-heavy text-[10px] text-black/60 leading-none mt-0.5">subido a tiempo</div>
            </div>
          </div>
          <div className="font-heavy text-[11px] flex items-center gap-1">
            <span className="bg-black text-white px-1.5 py-[2px] uppercase">
              {currentVote ? `TU VOTO: ${currentVote}` : 'VOTA'}
            </span>
          </div>
        </div>
      </div>

      {/* Vote controls */}
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          {voteButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => onVote(btn.value)}
              className={`relative flex-1 group btn-comic`}
            >
              <div className={`mx-auto w-[68px] h-[68px] rounded-full ${btn.bg} border-[3.5px] border-black flex items-center justify-center shadow-comic ${currentVote === btn.value ? 'ring-4 ring-black ring-offset-2 ring-offset-white' : ''}`}>
                <span className="font-display text-white text-[34px] leading-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
                  {btn.value}
                </span>
              </div>
              <div className="font-heavy text-[10px] text-center mt-1.5 uppercase">
                {btn.label}
              </div>
            </button>
          ))}
        </div>

        {/* PUES BIEN Button */}
        <button
          onClick={() => onVote('PB')}
          className={`relative w-full mt-3 bg-[#EF233C] border-[3.5px] border-black rounded-md py-3 px-3 shadow-comic-lg btn-comic overflow-hidden ${currentVote === 'PB' ? 'ring-4 ring-black ring-offset-2 ring-offset-white' : ''}`}
        >
          <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-black text-[#FFD60A] border-[2.5px] border-[#FFD60A] flex items-center justify-center shadow-comic">
                <Icon size={20} stroke={2.5}>
                  <path d="M5 11a7 7 0 0114 0v4a2 2 0 01-2 2h-1v3h-2v-3h-4v3H8v-3H7a2 2 0 01-2-2z" />
                  <circle cx="9" cy="12" r="1.4" fill="currentColor" />
                  <circle cx="15" cy="12" r="1.4" fill="currentColor" />
                </Icon>
              </div>
              <div className="text-left">
                <div className="font-display text-white text-[22px] leading-none">PUES BIEN</div>
                <div className="font-heavy text-[10px] text-[#FFD60A] mt-0.5 tracking-wide uppercase">RESTA −1 PUNTO · ÚSALO BIEN</div>
              </div>
            </div>
            <div className="font-display text-[#FFD60A] text-[26px] -rotate-6">−1</div>
          </div>
        </button>
      </div>
    </div>
  )
}
