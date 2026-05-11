import type { Meta, StoryObj } from '@storybook/react'
import { MVPBoard } from './MVPBoard'

const meta: Meta<typeof MVPBoard> = {
  title: 'Organisms/MVPBoard',
  component: MVPBoard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof MVPBoard>

export const Default: Story = {
  args: {
    name: 'LAIA',
    face: 'face-2',
    pts: 42,
    trend: 7,
  },
}
