import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SpeechBubble } from '../SpeechBubble'

describe('SpeechBubble Molecule', () => {
  it('renders children correctly', () => {
    render(<SpeechBubble>MESSAGE</SpeechBubble>)
    expect(screen.getByText('MESSAGE')).toBeInTheDocument()
  })

  it('applies tail class when hasTail is true', () => {
    const { container } = render(<SpeechBubble hasTail={true}>T</SpeechBubble>)
    expect(container.firstChild).toHaveClass('tail-down')
  })

  it('applies variant classes correctly', () => {
    const { container } = render(<SpeechBubble variant="yellow">Y</SpeechBubble>)
    expect(container.firstChild).toHaveClass('bg-[#FFD60A]')
  })
})
