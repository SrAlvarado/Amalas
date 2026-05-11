import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    face: {
      control: { type: 'select' },
      options: ['face-1', 'face-2', 'face-3', 'face-4', 'face-5', 'face-6'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    face: 'face-1',
    size: 'md',
    border: true,
  },
}

export const Large: Story = {
  args: {
    face: 'face-2',
    size: 'lg',
    border: true,
  },
}

export const ExtraLarge: Story = {
  args: {
    face: 'face-5',
    size: 'xl',
    border: true,
  },
}

export const NoBorder: Story = {
  args: {
    face: 'face-3',
    size: 'md',
    border: false,
  },
}
