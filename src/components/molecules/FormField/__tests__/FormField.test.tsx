import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FormField } from '../FormField'

describe('FormField Molecule', () => {
  it('renders label and input', () => {
    render(<FormField label="TEST LABEL" placeholder="test placeholder" />)
    expect(screen.getByText('TEST LABEL')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('test placeholder')).toBeInTheDocument()
  })

  it('renders hint when provided', () => {
    render(<FormField label="L" hint={<span data-testid="hint">HINT</span>} />)
    expect(screen.getByTestId('hint')).toBeInTheDocument()
  })

  it('renders error message and applies error styles to input', () => {
    render(<FormField label="L" error="ERROR MESSAGE" placeholder="P" />)
    expect(screen.getByText(/ERROR MESSAGE/)).toBeInTheDocument()
    const input = screen.getByPlaceholderText('P')
    expect(input).toHaveClass('border-[#EF233C]')
  })

  it('forwards ref to the input element', () => {
    const ref = { current: null }
    render(<FormField label="L" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
