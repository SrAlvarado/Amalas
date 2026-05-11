import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    progress: 68,
    variant: 'yellow',
  },
}

export const Red: Story = {
  args: {
    progress: 40,
    variant: 'red',
  },
}

export const Blue: Story = {
  args: {
    progress: 85,
    variant: 'blue',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <ProgressBar size="sm" progress={30} />
      <ProgressBar size="md" progress={50} />
      <ProgressBar size="lg" progress={70} />
    </div>
  ),
}
