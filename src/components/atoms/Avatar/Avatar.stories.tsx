import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    face: 'face-1',
    size: 'md',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm" face="face-1" />
      <Avatar size="md" face="face-2" />
      <Avatar size="lg" face="face-3" />
      <Avatar size="xl" face="face-4" />
    </div>
  ),
}

export const Faces: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['face-1', 'face-2', 'face-3', 'face-4', 'face-5', 'face-6'] as const).map((face) => (
        <Avatar key={face} face={face} size="md" />
      ))}
    </div>
  ),
}

export const IsYou: Story = {
  args: {
    face: 'face-5',
    size: 'lg',
    isYou: true,
  },
}

export const WithChildren: Story = {
  args: {
    size: 'md',
    children: <span className="font-display text-white text-xl">?</span>,
    className: 'bg-black/60',
  },
}
