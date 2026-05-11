import type { Meta, StoryObj } from '@storybook/react'
import { SocialAuthButton } from './SocialAuthButton'

const meta: Meta<typeof SocialAuthButton> = {
  title: 'Molecules/SocialAuthButton',
  component: SocialAuthButton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof SocialAuthButton>

export const Google: Story = {
  args: {
    provider: 'google',
  },
}

export const Apple: Story = {
  args: {
    provider: 'apple',
  },
}

export const Combined: Story = {
  render: () => (
    <div className="flex gap-2 p-4 paper border-[3px] border-black">
      <SocialAuthButton provider="google" />
      <SocialAuthButton provider="apple" />
    </div>
  )
}
