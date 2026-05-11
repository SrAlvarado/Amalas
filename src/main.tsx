import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Fuentes cómic desde Google Fonts
const linkFonts = document.createElement('link')
linkFonts.rel = 'stylesheet'
linkFonts.href =
  'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bangers&family=Anton&family=Inter:wght@600;700;800;900&display=swap'
document.head.appendChild(linkFonts)

const rootElement = document.getElementById('root')!

createRoot(rootElement).render(
  <StrictMode>
    {/* App se irá añadiendo aquí cuando esté lista */}
    <div style={{ color: 'white', padding: 32, fontFamily: 'monospace' }}>
      🎉 A malas — Proyecto inicializado
    </div>
  </StrictMode>,
)
