import type { Meta, StoryObj } from '@storybook/react'
import { NavItem } from './NavItem'
import { Icon } from '../../atoms/Icon'

const meta: Meta<typeof NavItem> = {
  title: 'Molecules/NavItem',
  component: NavItem,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof NavItem>

const TargetIcon = <Icon><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></Icon>

export const Default: Story = {
  args: {
    icon: TargetIcon,
    label: 'RETO',
    isActive: false,
  },
}

export const Active: Story = {
  args: {
    icon: TargetIcon,
    label: 'RETO',
    isActive: true,
  },
}

export const NavigationBar: Story = {
  render: () => (
    <div className="grid grid-cols-3 bg-white border-t-[3.5px] border-black max-w-sm">
      <NavItem icon={TargetIcon} label="RETO" isActive />
      <NavItem 
        icon={<Icon><path d="M14 3l7 7-3 3-7-7z"/><path d="M6 11l7 7-3 3-7-7z"/><path d="M9 13l-4 4"/><path d="M3 22h12"/></Icon>} 
        label="JUICIO" 
      />
      <NavItem 
        icon={<Icon><path d="M3 7l4 5 5-7 5 7 4-5v11H3z"/><path d="M3 18h18"/></Icon>} 
        label="EL MURO" 
      />
    </div>
  )
}
