import { useState } from 'react'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { RetoPage } from './pages/RetoPage'
import { JuicioPage } from './pages/JuicioPage'
import { RankingPage } from './pages/RankingPage'
import { useAuth } from './hooks/useAuth'

type Page = 'login' | 'register' | 'reto' | 'votar' | 'rank'

function App() {
  const { isAuthenticated, loading } = useAuth()
  const [currentPage, setCurrentPage] = useState<Page>('reto') // Forzar reto para visualización MVP

  // Loading state
  if (loading) {
    return (
      <div className="h-screen w-screen bg-[#F4ECD8] flex items-center justify-center">
        <div className="font-display text-[32px] animate-pulse logo-stroke-sm uppercase">
          CARGANDO...
        </div>
      </div>
    )
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'login': return <LoginPage />
      case 'register': return <RegisterPage />
      case 'reto': return <RetoPage />
      case 'votar': return <JuicioPage />
      case 'rank': return <RankingPage />
      default: return <RetoPage />
    }
  }

  return (
    <div className="bg-black min-h-screen">
      {renderPage()}
      
      {/* Dev Navigation Helper - Para que el usuario pueda cambiar entre pantallas en la demo */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex justify-center gap-1">
        {['login', 'register', 'reto', 'votar', 'rank'].map((p) => (
          <button 
            key={p}
            onClick={() => setCurrentPage(p as Page)}
            className={`px-2 py-1 border border-white/20 uppercase text-[8px] font-bold ${currentPage === p ? 'bg-[#FFD60A] text-black' : 'bg-black text-white'}`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
