import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ComicBadge } from '../ComicBadge'

describe('ComicBadge Component', () => {
  it('renders children correctly', () => {
    render(<ComicBadge>TEST BADGE</ComicBadge>)
    expect(screen.getByText('TEST BADGE')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    const { container: yellow } = render(<ComicBadge variant="yellow">Y</ComicBadge>)
    expect(yellow.firstChild).toHaveClass('bg-[#FFD60A]')

    const { container: black } = render(<ComicBadge variant="black">B</ComicBadge>)
    expect(black.firstChild).toHaveClass('bg-black')
  })

  it('applies tilt class when prop is true', () => {
    const { container } = render(<ComicBadge tilt={true}>TILT</ComicBadge>)
    expect(container.firstChild).toHaveClass('rotate-[-4deg]')
  })

  it('renders burst variant correctly', () => {
    const { container } = render(<ComicBadge variant="burst">BURST</ComicBadge>)
    expect(container.firstChild).toHaveClass('burst')
  })

  it('applies shadow classes correctly', () => {
    const { container } = render(<ComicBadge shadow="sm">SHADOW</ComicBadge>)
    expect(container.firstChild).toHaveClass('shadow-comic')
  })
})
