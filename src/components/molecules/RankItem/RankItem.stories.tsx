import type { Meta, StoryObj } from '@storybook/react'
import { RankItem } from './RankItem'

const meta: Meta<typeof RankItem> = {
  title: 'Molecules/RankItem',
  component: RankItem,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof RankItem>

export const Default: Story = {
  args: {
    pos: 2,
    name: 'MARCOS',
    pts: 36,
    face: 'face-1',
    trend: 3,
  },
}

export const You: Story = {
  args: {
    pos: 4,
    name: 'TÚ',
    pts: 28,
    face: 'face-5',
    trend: 2,
    isYou: true,
  },
}

export const Falling: Story = {
  args: {
    pos: 3,
    name: 'PAU',
    pts: 31,
    face: 'face-3',
    trend: -1,
  },
}

export const List: Story = {
  render: () => (
    <div className="space-y-2.5 max-w-sm">
      <RankItem pos={2} name="MARCOS" pts={36} face="face-1" trend={3} />
      <RankItem pos={3} name="PAU" pts={31} face="face-3" trend={-1} />
      <RankItem pos={4} name="TÚ" pts={28} face="face-5" trend={2} isYou />
    </div>
  )
}
