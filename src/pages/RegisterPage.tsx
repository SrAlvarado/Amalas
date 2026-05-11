import { useState } from 'react'
import { AuthShell } from '../components/templates/AuthShell'
import { AuthHeader } from '../components/organisms/AuthHeader'
import { FormField } from '../components/molecules/FormField'
import { ComicButton } from '../components/atoms/ComicButton'
import { StepIndicator } from '../components/molecules/StepIndicator'
import { Avatar, AvatarFace } from '../components/atoms/Avatar'

/**
 * Página RegisterPage: Flujo de alta de usuario.
 * Proceso en 3 pasos: Perfil -> Grupo -> Avatar.
 */
export function RegisterPage() {
  const [step, setStep] = useState(1)
  const [selectedFace, setSelectedFace] = useState<AvatarFace>('face-1')

  const faces: AvatarFace[] = ['face-1', 'face-2', 'face-3', 'face-4', 'face-5', 'face-6']

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <FormField label="¿Cómo te llamas?" placeholder="Tu nombre real" />
            <FormField label="Elige tu @mote" placeholder="@marquitos" hint="Será único" />
            <ComicButton 
              variant="primary" 
              className="w-full" 
              onClick={() => setStep(2)}
            >
              SIGUIENTE →
            </ComicButton>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="paper border-[3px] border-black p-4 bg-white/50">
              <p className="font-heavy text-[13px] mb-4">¿Tienes un código de grupo?</p>
              <FormField label="Código de Invitación" placeholder="EJ: AMALAS-123" />
            </div>
            <div className="text-center font-heavy text-[11px] text-black/40 uppercase">O TAMBIÉN</div>
            <ComicButton variant="secondary" className="w-full">
              CREAR NUEVA CUADRILLA
            </ComicButton>
            <button 
              className="w-full text-center font-heavy text-[12px] underline uppercase"
              onClick={() => setStep(3)}
            >
              Ya lo haré luego
            </button>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <p className="font-display text-[20px] text-center uppercase">ELIGE TU CARA</p>
            <div className="grid grid-cols-3 gap-4">
              {faces.map((face) => (
                <button 
                  key={face} 
                  onClick={() => setSelectedFace(face)}
                  className={`relative p-1 border-[3px] transition-all ${selectedFace === face ? 'border-[#EF233C] bg-[#EF233C]/10 scale-110 z-10' : 'border-black bg-white hover:border-[#1B6CFF]'}`}
                >
                  <Avatar face={face} size="md" className="w-full aspect-square" />
                  {selectedFace === face && (
                    <div className="absolute -top-2 -right-2 bg-black text-white text-[8px] px-1 font-black">OK</div>
                  )}
                </button>
              ))}
            </div>
            <ComicButton variant="primary" className="w-full" halftone>
              ¡ESTOY LISTO!
            </ComicButton>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <AuthShell
      header={
        <div className="pt-8">
          <h1 className="font-display logo-stroke-sm text-[40px] text-center mb-4 uppercase">
            REGISTRO
          </h1>
          <StepIndicator currentStep={step} totalSteps={3} className="mx-6 mb-8 border-[3px] border-black shadow-comic" />
        </div>
      }
    >
      {renderStep()}
    </AuthShell>
  )
}
