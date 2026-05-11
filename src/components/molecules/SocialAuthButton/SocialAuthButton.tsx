import { ComicButton } from '../../atoms/ComicButton'
import type { ComicButtonProps } from '../../atoms/ComicButton'
import { Icon } from '../../atoms/Icon'

export interface SocialAuthButtonProps {
  /** Proveedor (google, apple) */
  provider: 'google' | 'apple'
  /** Acción al pulsar */
  onClick?: () => void
  /** Texto del botón */
  label?: string
  /** Variantes del ComicButton */
  variant?: ComicButtonProps['variant']
  /** Clases adicionales */
  className?: string
}

/**
 * Molécula SocialAuthButton: Botón de acceso social.
 * Envuelve un ComicButton y le añade el icono y estilos del proveedor.
 */
export function SocialAuthButton({
  provider,
  onClick,
  label,
  variant = 'white',
  className = '',
}: SocialAuthButtonProps) {
  const isGoogle = provider === 'google'
  
  return (
    <ComicButton 
      variant={variant} 
      onClick={onClick} 
      className={`w-full flex items-center justify-center gap-3 ${className}`}
    >
      <Icon size={20}>
        {isGoogle ? (
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        ) : (
          <path d="M17.05 20.28c-.96.95-2.22 1.67-3.72 1.67-2.92 0-5.39-1.99-6.27-4.67h-3.41v2.64C5.56 24.36 10.45 28 16.19 28c3.55 0 6.64-1.22 8.91-3.32l-3.57-2.77c-1.05.71-2.43 1.13-3.83 1.13-3.07 0-5.67-2.08-6.6-4.94l-3.41 2.64C9.53 18.06 13.06 15 17.1 15c1.64 0 3.12.57 4.3 1.51l3.22-3.22C22.61 11.23 19.98 10 17.1 10c-5.74 0-10.63 3.64-12.52 8.08l3.41 2.64C8.61 18.25 11.21 16 14.28 16c1.19 0 2.29.35 3.22.95l-3.41 2.64c-.26-.14-.54-.25-.83-.31z" fill="#000"/>
        )}
      </Icon>
      <span className="uppercase tracking-widest text-[13px]">
        {label || (isGoogle ? 'Entrar con Google' : 'Entrar con Apple')}
      </span>
    </ComicButton>
  )
}
