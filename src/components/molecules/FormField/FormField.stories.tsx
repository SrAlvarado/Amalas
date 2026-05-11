import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from './FormField'

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof FormField>

export const Default: Story = {
  args: {
    label: 'Usuario o Email',
    placeholder: '@tunick o tu@mail.com',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Contraseña',
    type: 'password',
    placeholder: '•••••••••',
    hint: <button className="underline uppercase">Mostrar</button>,
  },
}

export const WithError: Story = {
  args: {
    label: 'Mote / @handle',
    placeholder: '@marquitos',
    defaultValue: 'marcos 123',
    error: 'No se permiten espacios en el mote',
  },
}

export const FullExample: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm p-4 paper border-[3px] border-black">
      <FormField label="Email" type="email" placeholder="tu@mail.com" />
      <FormField 
        label="Password" 
        type="password" 
        placeholder="•••••••••" 
        hint={<span className="text-[9px]">Olvidada?</span>}
      />
    </div>
  )
}
