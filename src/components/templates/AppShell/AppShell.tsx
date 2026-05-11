import { ReactNode } from 'react'
import { Header, HeaderProps } from '../organisms/Header'
import { BottomNav, TabId } from '../organisms/BottomNav'

export interface AppShellProps extends HeaderProps {
  /** Contenido principal de la página */
  children: ReactNode
  /** ID de la pestaña activa */
  activeTab: TabId
  /** Callback al cambiar de pestaña */
  onTabChange: (tabId: TabId) => void
  /** Clases adicionales para el contenedor de contenido */
  contentClassName?: string
}

/**
 * Plantilla AppShell: Estructura principal de la aplicación.
 * Proporciona el Header fijo, el BottomNav y el contenedor con scroll para el contenido.
 */
export function AppShell({
  children,
  activeTab,
  onTabChange,
  streak,
  notifications,
  contentClassName = '',
}: AppShellProps) {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#F4ECD8] relative overflow-hidden border-x-[3px] border-black shadow-2xl">
      {/* Header Fijo */}
      <Header streak={streak} notifications={notifications} />
      
      {/* Contenedor de Contenido con Scroll */}
      <main className={`flex-1 overflow-y-auto px-4 py-5 pb-24 ${contentClassName}`}>
        {children}
      </main>
      
      {/* Navegación Inferior Fija */}
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
      
      {/* Paper texture overlay (optional globally) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
    </div>
  )
}
