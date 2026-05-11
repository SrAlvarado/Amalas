import type { Meta, StoryObj } from '@storybook/react'
import { TimerCard } from './TimerCard'

const meta: Meta<typeof TimerCard> = {
  title: 'Organisms/TimerCard',
  component: TimerCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof TimerCard>

export const Default: Story = {
  args: {
    hours: 3,
    minutes: 45,
    seconds: 12,
    progress: 68,
  },
}

export const Critical: Story = {
  args: {
    hours: 0,
    minutes: 4,
    seconds: 59,
    progress: 5,
  },
}
