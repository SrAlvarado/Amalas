import type { Meta, StoryObj } from '@storybook/react'
import { ComicButton } from './ComicButton'

const meta: Meta<typeof ComicButton> = {
  title: 'Atoms/ComicButton',
  component: ComicButton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ComicButton>

export const Primary: Story = {
  args: {
    children: 'SIGUIENTE →',
    variant: 'primary',
    halftone: true,
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ComicButton variant="primary">PRIMARY (BLUE)</ComicButton>
      <ComicButton variant="secondary">SECONDARY (YELLOW)</ComicButton>
      <ComicButton variant="danger">DANGER (RED)</ComicButton>
      <ComicButton variant="white">WHITE</ComicButton>
      <ComicButton variant="black">BLACK</ComicButton>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ComicButton size="sm">PEQUEÑO</ComicButton>
      <ComicButton size="md">MEDIANO</ComicButton>
      <ComicButton size="lg">GIGANTE</ComicButton>
    </div>
  ),
}

export const WithHalftone: Story = {
  args: {
    children: '¡CON TEXTURA!',
    variant: 'danger',
    halftone: true,
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    children: 'BLOQUEADO',
    variant: 'primary',
    disabled: true,
  },
}
