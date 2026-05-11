import type { Meta, StoryObj } from '@storybook/react'
import { ActionShootButton } from './ActionShootButton'

const meta: Meta<typeof ActionShootButton> = {
  title: 'Organisms/ActionShootButton',
  component: ActionShootButton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ActionShootButton>

export const Default: Story = {
  args: {
    onClick: () => alert('¡FOTO! 📸'),
  },
}

export const CustomText: Story = {
  args: {
    title: 'SUBIR PRUEBA',
    highlightText: '(VAMOS)',
    onClick: () => {},
  },
}
