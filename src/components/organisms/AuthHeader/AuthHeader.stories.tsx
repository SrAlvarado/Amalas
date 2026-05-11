import type { Meta, StoryObj } from '@storybook/react'
import { AuthHeader } from './AuthHeader'

const meta: Meta<typeof AuthHeader> = {
  title: 'Organisms/AuthHeader',
  component: AuthHeader,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof AuthHeader>

export const Welcome: Story = {
  args: {
    title: '¡QUÉ PASA!',
    message: 'Entra ya si no quieres que tus amigos se rían de tu racha de 0 días.',
  },
}

export const Register: Story = {
  args: {
    title: 'NUEVO AQUÍ?',
    message: 'Crea tu cuenta y empieza a humillar a tus colegas con tus fotos.',
  },
}
