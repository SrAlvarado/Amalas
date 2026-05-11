import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    streak: 4,
    notifications: 2,
  },
}

export const NoNotifications: Story = {
  args: {
    streak: 0,
    notifications: 0,
  },
}
