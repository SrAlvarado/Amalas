import { AuthShell } from '../components/templates/AuthShell'
import { AuthHeader } from '../components/organisms/AuthHeader'
import { SocialAuthButton } from '../components/molecules/SocialAuthButton'
import { SpeechBubble } from '../components/molecules/SpeechBubble'
import { useAuth } from '../hooks/useAuth'

/**
 * Página LoginPage: Punto de entrada a la aplicación.
 * Presenta la marca y las opciones de acceso social.
 */
export function LoginPage() {
  const { loginWithGoogle, loginWithApple } = useAuth()

  return (
    <AuthShell
      header={
        <AuthHeader 
          title="¡QUÉ PASA!" 
          message="Entra ya si no quieres que tus amigos se rían de tu racha de 0 días." 
        />
      }
    >
      <div className="flex flex-col gap-4 mt-8">
        <SocialAuthButton 
          provider="google" 
          onClick={loginWithGoogle}
          className="w-full"
        />
        <SocialAuthButton 
          provider="apple" 
          onClick={loginWithApple}
          className="w-full"
        />
      </div>

      <div className="mt-12">
        <SpeechBubble variant="white" className="rotate-[1deg]">
          <p className="font-heavy text-[11px] text-center text-black/60 uppercase">
            Al entrar aceptas nuestras reglas gamberras<br />y el uso de tus fotos para las votaciones.
          </p>
        </SpeechBubble>
      </div>
      
      <div className="mt-auto py-8 text-center">
        <div className="font-display text-[14px] text-black/30 tracking-widest">
          SRALVARADO © 2026
        </div>
      </div>
    </AuthShell>
  )
}
