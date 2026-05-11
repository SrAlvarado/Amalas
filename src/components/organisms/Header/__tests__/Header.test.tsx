import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from '../Header'

describe('Header Organism', () => {
  it('renders logo text correctly', () => {
    render(<Header />)
    expect(screen.getByText(/A/)).toBeInTheDocument()
    expect(screen.getByText(/MALAS/)).toBeInTheDocument()
  })

  it('displays the correct streak count', () => {
    render(<Header streak={10} />)
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('displays notification badge only when notifications > 0', () => {
    const { rerender } = render(<Header notifications={0} streak={99} />)
    expect(screen.queryByText('0')).not.toBeInTheDocument()

    rerender(<Header notifications={5} />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders the fake status bar', () => {
    render(<Header />)
    expect(screen.getByText('9:41')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })
})
