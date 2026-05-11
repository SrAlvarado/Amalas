import type { Meta, StoryObj } from '@storybook/react'
import { StepIndicator } from './StepIndicator'

const meta: Meta<typeof StepIndicator> = {
  title: 'Molecules/StepIndicator',
  component: StepIndicator,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof StepIndicator>

export const Step1: Story = {
  args: {
    currentStep: 1,
    totalSteps: 3,
  },
}

export const Step2: Story = {
  args: {
    currentStep: 2,
    totalSteps: 3,
  },
}

export const Step3: Story = {
  args: {
    currentStep: 3,
    totalSteps: 3,
  },
}
