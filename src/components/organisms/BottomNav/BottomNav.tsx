import { NavItem } from '../../molecules/NavItem'
import { Icon } from '../../atoms/Icon'

export type TabId = 'reto' | 'juicio' | 'muro'

export interface BottomNavProps {
  /** Pestaña actualmente activa */
  activeTab: TabId
  /** Callback cuando cambia la pestaña */
  onTabChange: (tab: TabId) => void
  /** Clases adicionales */
  className?: string
}

/**
 * Organismo BottomNav: Barra de navegación inferior completa.
 * Gestiona el conjunto de pestañas principales de la aplicación.
 */
export function BottomNav({
  activeTab,
  onTabChange,
  className = '',
}: BottomNavProps) {
  const items = [
    { 
      id: 'reto' as TabId, 
      label: 'RETO', 
      icon: (
        <Icon size={22} stroke={2.5}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </Icon>
      ) 
    },
    { 
      id: 'juicio' as TabId, 
      label: 'JUICIO', 
      icon: (
        <Icon size={22} stroke={2.5}>
          <path d="M14 3l7 7-3 3-7-7z" />
          <path d="M6 11l7 7-3 3-7-7z" />
          <path d="M9 13l-4 4" />
          <path d="M3 22h12" />
        </Icon>
      ) 
    },
    { 
      id: 'muro' as TabId, 
      label: 'EL MURO', 
      icon: (
        <Icon size={22} stroke={2.5}>
          <path d="M3 7l4 5 5-7 5 7 4-5v11H3z" />
          <path d="M3 18h18" />
        </Icon>
      ) 
    },
  ]

  return (
    <nav className={`absolute bottom-0 left-0 right-0 bg-white border-t-[3.5px] border-black z-30 ${className}`}>
      <div className="grid grid-cols-3">
        {items.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            isActive={activeTab === item.id}
            onClick={() => onTabChange(item.id)}
          />
        ))}
      </div>
      
      {/* Home Indicator (iOS style) */}
      <div className="flex justify-center pb-1.5 pt-0.5">
        <div className="w-28 h-1 bg-black rounded-full" />
      </div>
    </nav>
  )
}
