import type { Meta, StoryObj } from '@storybook/react'
import { SpeechBubble } from './SpeechBubble'

const meta: Meta<typeof SpeechBubble> = {
  title: 'Molecules/SpeechBubble',
  component: SpeechBubble,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof SpeechBubble>

export const Default: Story = {
  args: {
    children: (
      <p className="font-heavy text-[13px] leading-snug">
        Si no entras hoy, te ponemos cara de tonto en el ranking. <span className="italic">Tú mismo.</span>
      </p>
    ),
  },
}

export const WithTail: Story = {
  args: {
    hasTail: true,
    children: (
      <p className="font-heavy text-[13px] leading-snug">
        <span className="font-display text-[16px] text-[#EF233C] mr-1">¡EH!</span>
        Penalización de <span className="bg-black text-[#FFD60A] px-1.5 font-black">-2 PTS</span> si te pasas de tiempo.
      </p>
    ),
  },
}

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    children: (
      <p className="font-heavy text-[13px] leading-snug">
        Este es un mensaje importante en color amarillo.
      </p>
    ),
  },
}
