import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MVPBoard } from '../MVPBoard'

describe('MVPBoard Organism', () => {
  const mockProps = {
    name: 'EL JEFE',
    pts: 150,
    face: 'face-2' as const,
    trend: 1,
  }

  it('renders name and points correctly', () => {
    render(<MVPBoard {...mockProps} />)
    expect(screen.getByText('EL JEFE')).toBeInTheDocument()
    expect(screen.getByText('150 PTS')).toBeInTheDocument()
  })

  it('renders racha badge when trend > 0', () => {
    render(<MVPBoard {...mockProps} />)
    expect(screen.getByText(/RACHA/)).toBeInTheDocument()
  })
})
