import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { BottomNav, TabId } from './BottomNav'

const meta: Meta<typeof BottomNav> = {
  title: 'Organisms/BottomNav',
  component: BottomNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof BottomNav>

export const Default: Story = {
  args: {
    activeTab: 'reto',
    onTabChange: (tab) => console.log('Tab changed to:', tab),
  },
}

export const Interactive: Story = {
  render: () => {
    const [tab, setTab] = useState<TabId>('reto')
    return (
      <div className="h-[200px] relative">
        <BottomNav activeTab={tab} onTabChange={setTab} />
      </div>
    )
  }
}
