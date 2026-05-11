import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: '@tunick o tu@mail.com',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '•••••••••',
  },
}

export const Error: Story = {
  args: {
    placeholder: 'Algo ha ido mal...',
    hasError: true,
    defaultValue: 'Valor incorrecto',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'marquitos',
  },
}
