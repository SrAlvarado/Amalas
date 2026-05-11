import type { Meta, StoryObj } from '@storybook/react'
import { SquadMember } from './SquadMember'

const meta: Meta<typeof SquadMember> = {
  title: 'Molecules/SquadMember',
  component: SquadMember,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof SquadMember>

export const Pending: Story = {
  args: {
    name: 'JON',
    face: 'face-6',
    done: false,
  },
}

export const Completed: Story = {
  args: {
    name: 'MARCOS',
    face: 'face-1',
    done: true,
  },
}

export const You: Story = {
  args: {
    name: 'TÚ',
    face: 'face-5',
    done: true,
    isYou: true,
  },
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-2.5 max-w-[300px]">
      <SquadMember name="MARCOS" face="face-1" done />
      <SquadMember name="LAIA" face="face-2" done />
      <SquadMember name="PAU" face="face-3" done />
      <SquadMember name="INES" face="face-4" done />
      <SquadMember name="TÚ" face="face-5" done={false} isYou />
      <SquadMember name="JON" face="face-6" done={false} />
    </div>
  )
}
