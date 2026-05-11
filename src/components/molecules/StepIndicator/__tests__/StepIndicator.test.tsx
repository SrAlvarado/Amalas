import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StepIndicator } from '../StepIndicator'

describe('StepIndicator Molecule', () => {
  it('renders all steps', () => {
    render(<StepIndicator currentStep={1} totalSteps={3} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('highlights current and completed steps', () => {
    const { container } = render(<StepIndicator currentStep={2} totalSteps={3} />)
    const steps = container.querySelectorAll('.w-7.h-7')
    
    // Step 1 (Completed)
    expect(steps[0]).toHaveClass('bg-[#FFD60A]')
    // Step 2 (Current)
    expect(steps[1]).toHaveClass('bg-[#FFD60A]')
    // Step 3 (Pending)
    expect(steps[2]).toHaveClass('bg-black')
  })
})
