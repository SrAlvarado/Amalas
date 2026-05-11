import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Input } from '../Input'

describe('Input Component', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test Input" />)
    expect(screen.getByPlaceholderText('Test Input')).toBeInTheDocument()
  })

  it('handles value changes', () => {
    const handleChange = vi.fn()
    render(<Input placeholder="Test" onChange={handleChange} />)
    const input = screen.getByPlaceholderText('Test')
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('applies error class when hasError is true', () => {
    render(<Input placeholder="Error" hasError={true} />)
    const input = screen.getByPlaceholderText('Error')
    expect(input).toHaveClass('border-[#EF233C]')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Input placeholder="Disabled" disabled={true} />)
    const input = screen.getByPlaceholderText('Disabled')
    expect(input).toBeDisabled()
  })

  it('supports custom className', () => {
    render(<Input placeholder="Class" className="custom-test-class" />)
    const input = screen.getByPlaceholderText('Class')
    expect(input).toHaveClass('custom-test-class')
  })
})
