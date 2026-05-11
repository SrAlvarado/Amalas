import { useState } from 'react'
import { AuthShell } from '../components/templates/AuthShell'
import { FormField } from '../components/molecules/FormField'
import { ComicButton } from '../components/atoms/ComicButton'
import { Avatar } from '../components/atoms/Avatar'
import type { AvatarFace } from '../components/atoms/Avatar'
import { StepIndicator } from '../components/molecules/StepIndicator'
import { Icon } from '../components/atoms/Icon'

/**
 * Página RegisterPage: Flujo de alta de nuevo usuario.
 * Proceso en dos pasos: Datos básicos y Personalización (Avatar).
 */
export function RegisterPage() {
  const [step, setStep] = useState(1)
  const [selectedFace, setSelectedFace] = useState<AvatarFace>('face-1')
  const [username, setUsername] = useState('')

  const faces: AvatarFace[] = ['face-1', 'face-2', 'face-3', 'face-4', 'face-5', 'face-6']

  const handleNext = () => setStep(2)
  const handleBack = () => setStep(1)
  const handleFinish = () => {
    alert(`¡BIENVENIDO ${username.toUpperCase()}!`)
  }

  return (
    <AuthShell>
      <div className="flex flex-col h-full space-y-8 py-4">
        {/* Progress Header */}
        <div className="space-y-4">
          <StepIndicator currentStep={step} totalSteps={2} />
          <h2 className="font-display text-[32px] leading-tight uppercase">
            {step === 1 ? 'ÚNETE A LA\nCUADRILLA' : 'ELIGE TU\nCARA'}
          </h2>
        </div>

        {step === 1 ? (
          /* PASO 1: DATOS */
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <FormField 
              label="TU APODO" 
              placeholder="Ej. ElGamberro" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              icon={<Icon size={18}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>}
            />
            <FormField 
              label="EMAIL" 
              placeholder="tu@email.com" 
              type="email"
              icon={<Icon size={18}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></Icon>}
            />
            <FormField 
              label="PASSWORD" 
              type="password" 
              placeholder="••••••••" 
              icon={<Icon size={18}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>}
            />
            
            <div className="pt-4">
              <ComicButton className="w-full" size="lg" halftone onClick={handleNext}>
                SIGUIENTE PASO →
              </ComicButton>
            </div>
          </div>
        ) : (
          /* PASO 2: AVATAR */
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#FFD60A] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <Avatar face={selectedFace} size="xl" border className="relative z-10 scale-125" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {faces.map((f) => (
                <button 
                  key={f} 
                  onClick={() => setSelectedFace(f)}
                  className={`p-2 border-[3px] transition-all ${selectedFace === f ? 'bg-[#FFD60A] border-black shadow-comic scale-105' : 'bg-white border-black/10'}`}
                >
                  <Avatar face={f} size="md" border={false} />
                </button>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <ComicButton variant="white" className="flex-1" onClick={handleBack}>
                ATRÁS
              </ComicButton>
              <ComicButton className="flex-1" halftone onClick={handleFinish}>
                ¡DENTRO!
              </ComicButton>
            </div>
          </div>
        )}
      </div>
    </AuthShell>
  )
}
