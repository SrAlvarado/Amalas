import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TimerCard } from '../TimerCard'

describe('TimerCard Organism', () => {
  it('renders time correctly with padding', () => {
    render(<TimerCard hours={3} minutes={5} seconds={9} progress={50} />)
    expect(screen.getByText(/03/)).toBeInTheDocument()
    expect(screen.getByText(/05/)).toBeInTheDocument()
    expect(screen.getByText(/09/)).toBeInTheDocument()
  })

  it('renders progress bar with correct value', () => {
    render(<TimerCard hours={1} minutes={1} seconds={1} progress={75} />)
    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toHaveAttribute('aria-valuenow', '75')
  })

  it('renders the decorative burst text', () => {
    render(<TimerCard hours={1} minutes={1} seconds={1} progress={50} />)
    expect(screen.getByText(/¡YA/)).toBeInTheDocument()
    expect(screen.getByText(/VA!/)).toBeInTheDocument()
  })
})
