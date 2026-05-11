import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ComicButton } from '../ComicButton'

describe('ComicButton Component', () => {
  it('renders children correctly', () => {
    render(<ComicButton>CLICK ME</ComicButton>)
    expect(screen.getByText('CLICK ME')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<ComicButton onClick={handleClick}>CLICK ME</ComicButton>)
    fireEvent.click(screen.getByText('CLICK ME'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies variant classes correctly', () => {
    const { container: primary } = render(<ComicButton variant="primary">P</ComicButton>)
    expect(primary.firstChild).toHaveClass('bg-[#1B6CFF]')

    const { container: danger } = render(<ComicButton variant="danger">D</ComicButton>)
    expect(danger.firstChild).toHaveClass('bg-[#EF233C]')
  })

  it('applies size classes correctly', () => {
    const { container: sm } = render(<ComicButton size="sm">S</ComicButton>)
    expect(sm.firstChild).toHaveClass('py-2')

    const { container: lg } = render(<ComicButton size="lg">L</ComicButton>)
    expect(lg.firstChild).toHaveClass('py-4', 'shadow-comic-xl')
  })

  it('renders halftone overlay when prop is true', () => {
    const { container } = render(<ComicButton halftone={true}>H</ComicButton>)
    expect(container.querySelector('.halftone')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<ComicButton disabled={true}>DISABLED</ComicButton>)
    const button = screen.getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50')
  })
})
