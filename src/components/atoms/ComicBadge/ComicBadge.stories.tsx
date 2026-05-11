import type { Meta, StoryObj } from '@storybook/react'
import { ComicBadge } from './ComicBadge'

const meta: Meta<typeof ComicBadge> = {
  title: 'Atoms/ComicBadge',
  component: ComicBadge,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ComicBadge>

export const Default: Story = {
  args: {
    children: 'DÍA 27',
    variant: 'black',
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ComicBadge variant="black">BLACK</ComicBadge>
      <ComicBadge variant="yellow">YELLOW</ComicBadge>
      <ComicBadge variant="red">RED</ComicBadge>
      <ComicBadge variant="blue">BLUE</ComicBadge>
      <ComicBadge variant="white">WHITE</ComicBadge>
    </div>
  ),
}

export const Tilted: Story = {
  args: {
    children: '¡PUM!',
    variant: 'yellow',
    tilt: true,
  },
}

export const Burst: Story = {
  render: () => (
    <div className="w-32 h-32 flex items-center justify-center">
      <ComicBadge variant="burst" className="w-24 h-24 rotate-12">
        ¡ZAS!<br />+3pts
      </ComicBadge>
    </div>
  ),
}

export const WithShadow: Story = {
  args: {
    children: 'MVP',
    variant: 'yellow',
    shadow: 'sm',
  },
}
