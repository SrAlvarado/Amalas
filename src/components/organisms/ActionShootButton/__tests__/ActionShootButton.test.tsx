import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ActionShootButton } from '../ActionShootButton'

describe('ActionShootButton Organism', () => {
  it('renders title and highlight text', () => {
    render(<ActionShootButton title="TEST ACTION" highlightText="NOW" onClick={() => {}} />)
    expect(screen.getByText(/TEST ACTION/)).toBeInTheDocument()
    expect(screen.getByText(/NOW/)).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<ActionShootButton onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders the camera icon container', () => {
    const { container } = render(<ActionShootButton onClick={() => {}} />)
    const iconContainer = container.querySelector('.rounded-full.bg-white')
    expect(iconContainer).toBeInTheDocument()
    expect(iconContainer).toHaveClass('w-20', 'h-20')
  })
})
