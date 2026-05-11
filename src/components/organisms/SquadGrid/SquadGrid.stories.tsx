import type { Meta, StoryObj } from '@storybook/react'
import { SquadGrid } from './SquadGrid'

const meta: Meta<typeof SquadGrid> = {
  title: 'Organisms/SquadGrid',
  component: SquadGrid,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof SquadGrid>

export const Default: Story = {
  args: {
    members: [
      { name: 'MARCOS', face: 'face-1', done: true },
      { name: 'LAIA', face: 'face-2', done: true },
      { name: 'PAU', face: 'face-3', done: true },
      { name: 'INES', face: 'face-4', done: true },
      { name: 'TÚ', face: 'face-5', done: false, isYou: true },
      { name: 'JON', face: 'face-6', done: false },
    ],
  },
}

export const AllReady: Story = {
  args: {
    members: [
      { name: 'PAU', face: 'face-3', done: true },
      { name: 'TÚ', face: 'face-5', done: true, isYou: true },
    ],
  },
}
