import type { Meta, StoryObj } from '@storybook/react'
import { LoserBoard } from './LoserBoard'

const meta: Meta<typeof LoserBoard> = {
  title: 'Organisms/LoserBoard',
  component: LoserBoard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof LoserBoard>

export const Default: Story = {
  args: {
    pos: 12,
    name: 'JON',
    pts: 14,
    face: 'face-6',
    shameMessage: '3 "PUES BIEN" esta semana 💀',
    punishmentTitle: 'Pagar la próxima ronda',
    punishmentDesc: 'El lunes en el bar de siempre.',
  },
}
