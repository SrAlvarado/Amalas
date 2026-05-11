import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { NavItem } from '../NavItem'

describe('NavItem Molecule', () => {
  it('renders label and icon', () => {
    render(<NavItem icon={<span data-testid="icon" />} label="TEST" />)
    expect(screen.getByText('TEST')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<NavItem icon={<span />} label="T" onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies active styles when isActive is true', () => {
    const { container } = render(<NavItem icon={<span />} label="T" isActive={true} />)
    // Check for active bg color class on the icon container
    expect(container.querySelector('.bg-\\[\\#FFD60A\\]')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAttribute('aria-current', 'page')
  })
})
