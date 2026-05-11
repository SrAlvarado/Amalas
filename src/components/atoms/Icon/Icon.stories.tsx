import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'paper' },
  },
}
export default meta

type Story = StoryObj<typeof Icon>

/** Icono de cámara — usado en el botón de hacer foto */
export const Camera: Story = {
  args: {
    size: 26,
    stroke: 2.5,
    children: (
      <>
        <path d="M3 8h3l2-3h8l2 3h3v11H3z" />
        <circle cx="12" cy="13.5" r="3.6" />
      </>
    ),
  },
}

/** Icono de corona — usado en el ranking */
export const Crown: Story = {
  args: {
    size: 26,
    stroke: 2.5,
    children: (
      <>
        <path d="M3 7l4 5 5-7 5 7 4-5v11H3z" />
        <path d="M3 18h18" />
      </>
    ),
  },
}

/** Icono con relleno (ejemplo: llama de fuego) */
export const FilledFlame: Story = {
  args: {
    size: 26,
    stroke: 2.5,
    fill: 'currentColor',
    children: <path d="M12 3c1 4 5 5 5 10a5 5 0 11-10 0c0-3 2-4 2-7 2 1 3 0 3-3z" />,
  },
}

/** Diferentes tamaños disponibles */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {([14, 18, 22, 26, 32, 36] as const).map((size) => (
        <Icon key={size} size={size}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </Icon>
      ))}
    </div>
  ),
}
