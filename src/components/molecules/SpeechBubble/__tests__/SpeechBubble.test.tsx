import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SpeechBubble } from '../SpeechBubble'

describe('SpeechBubble Molecule', () => {
  it('renders children correctly', () => {
    render(<SpeechBubble>¡HOLA GAMBERRO!</SpeechBubble>)
    expect(screen.getByText('¡HOLA GAMBERRO!')).toBeInTheDocument()
  })

  it('applies correct variant classes', () => {
    const { container } = render(<SpeechBubble variant="yellow">MOLA</SpeechBubble>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('bg-[#FFD60A]')
  })

  it('renders tail by default', () => {
    const { container } = render(<SpeechBubble>TEST</SpeechBubble>)
    // The tail is a div with absolute positioning
    const tail = container.querySelector('.absolute.w-0.h-0')
    expect(tail).toBeInTheDocument()
  })

  it('hides tail when hasTail is false', () => {
    const { container } = render(<SpeechBubble hasTail={false}>TEST</SpeechBubble>)
    const tail = container.querySelector('.absolute.w-0.h-0')
    expect(tail).not.toBeInTheDocument()
  })
})
