import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SquadGrid } from '../SquadGrid'

describe('SquadGrid Organism', () => {
  const mockMembers = [
    { name: 'PEPE', face: 'face-1' as const, done: true },
    { name: 'JUAN', face: 'face-2' as const, done: false },
  ]

  it('renders correctly with title and count', () => {
    render(<SquadGrid members={mockMembers} />)
    expect(screen.getByText(/TU CUADRILLA/i)).toBeInTheDocument()
    expect(screen.getByText('1/2 LISTOS')).toBeInTheDocument()
  })

  it('renders all member names', () => {
    render(<SquadGrid members={mockMembers} />)
    expect(screen.getByText('PEPE')).toBeInTheDocument()
    expect(screen.getByText('JUAN')).toBeInTheDocument()
  })
})
