import type { Meta, StoryObj } from '@storybook/react'
import { ThemeCard } from './ThemeCard'

const meta: Meta<typeof ThemeCard> = {
  title: 'Organisms/ThemeCard',
  component: ThemeCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ThemeCard>

export const Default: Story = {
  args: {
    title: '¡POSTURA<br/>DE <span class="text-[#EF233C]">YOGA!</span>',
    description: 'Cuanto más ridícula, más puntos. Sin trampas.',
    burstText: '¡ZAS!\n+3pts',
    proposedBy: 'LAIA',
    friendFaces: ['face-1', 'face-2', 'face-3', 'face-4'],
  },
}

export const Simple: Story = {
  args: {
    title: 'HACER UNA<br/>MUECA FEA',
    description: 'No vale usar filtros, ¡queremos ver esas caras!',
    burstText: '',
    proposedBy: 'MARCOS',
    friendFaces: ['face-5'],
  },
}
