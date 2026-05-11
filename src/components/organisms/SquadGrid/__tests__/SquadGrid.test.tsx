import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SquadGrid } from '../SquadGrid'

describe('SquadGrid Organism', () => {
  const mockMembers = [
    { name: 'M1', face: 'face-1' as const, done: true },
    { name: 'M2', face: 'face-2' as const, done: false },
  ]

  it('renders correctly with title and count', () => {
    render(<SquadGrid members={mockMembers} />)
    expect(screen.getByText(/LA CUADRILLA/i)).toBeInTheDocument()
    expect(screen.getByText('1 / 2 LISTOS')).toBeInTheDocument()
  })

  it('renders all member molecules', () => {
    render(<SquadGrid members={mockMembers} />)
    expect(screen.getByText('M1')).toBeInTheDocument()
    expect(screen.getByText('M2')).toBeInTheDocument()
  })
})
