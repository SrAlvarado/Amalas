import { useState, useEffect } from 'react'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { RetoPage } from './pages/RetoPage'
import { JuicioPage } from './pages/JuicioPage'
import { RankingPage } from './pages/RankingPage'
import { useAuth } from './hooks/useAuth'

export type PageId = 'login' | 'register' | 'reto' | 'juicio' | 'muro'

function App() {
  const { user, loading } = useAuth()
  const [currentPage, setCurrentPage] = useState<PageId>('login')

  // Sincronización de estado de autenticación
  useEffect(() => {
    if (!loading) {
      if (user) {
        // Si hay usuario y estamos en pantallas de auth, saltamos al juego
        if (currentPage === 'login' || currentPage === 'register') {
          setCurrentPage('reto')
        }
      } else {
        // Si no hay usuario, forzamos login
        setCurrentPage('login')
      }
    }
  }, [user, loading])

  // Pantalla de carga premium
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
      case 'login': 
        return <LoginPage onNavigate={setCurrentPage} />
      case 'register': 
        return <RegisterPage onNavigate={setCurrentPage} />
      case 'reto': 
        return <RetoPage onNavigate={setCurrentPage} />
      case 'juicio': 
        return <JuicioPage onNavigate={setCurrentPage} />
      case 'muro': 
        return <RankingPage onNavigate={setCurrentPage} />
      default: 
        return <RetoPage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="bg-black min-h-screen">
      {renderPage()}
    </div>
  )
}

export default App
