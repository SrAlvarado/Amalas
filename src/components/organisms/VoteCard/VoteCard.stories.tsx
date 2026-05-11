import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { VoteCard } from './VoteCard'

const meta: Meta<typeof VoteCard> = {
  title: 'Organisms/VoteCard',
  component: VoteCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof VoteCard>

export const Default: Story = {
  args: {
    name: 'MARCOS',
    face: 'face-1',
    pose: 'GUERRERO II',
    uploadTime: '08:42',
    currentVote: null,
    onVote: (v) => console.log('Voted:', v),
  },
}

export const Interactive: Story = {
  render: () => {
    const [vote, setVote] = useState<string | null>(null)
    return (
      <div className="max-w-sm">
        <VoteCard 
          name="LAIA" 
          face="face-2" 
          pose="ÁRBOL BORRACHO" 
          uploadTime="09:15" 
          currentVote={vote} 
          onVote={(v) => setVote(prev => prev === v ? null : v)} 
        />
      </div>
    )
  }
}
