import { ComicButton, ComicButtonProps } from '../../atoms/ComicButton'

export interface SocialAuthButtonProps extends Omit<ComicButtonProps, 'children'> {
  /** Marca de la red social */
  provider: 'google' | 'apple'
}

/**
 * Molécula SocialAuthButton: Botones preconfigurados para autenticación social.
 * Hereda los estilos de ComicButton.
 */
export function SocialAuthButton({ provider, className = '', ...props }: SocialAuthButtonProps) {
  const labels = {
    google: 'GOOGLE',
    apple: 'APPLE',
  }

  const variantClasses = {
    google: 'bg-white text-black',
    apple: 'bg-black text-white',
  }

  return (
    <ComicButton
      variant="white" // Base style, overwritten by className if needed
      size="sm"
      className={`${variantClasses[provider]} ${className}`}
      {...props}
    >
      {labels[provider]}
    </ComicButton>
  )
}
