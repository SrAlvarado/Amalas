import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LoserBoard } from '../LoserBoard'

describe('LoserBoard Organism', () => {
  const mockProps = {
    pos: 12,
    name: 'EL TRISTE',
    pts: 45,
    face: 'face-5' as const,
    punishmentTitle: 'INVITAR A CAÑAS',
    punishmentDesc: 'Toda la tarde pagando rondas.',
  }

  it('renders name, position and points', () => {
    render(<LoserBoard {...mockProps} />)
    expect(screen.getByText('EL TRISTE')).toBeInTheDocument()
    expect(screen.getByText('#12')).toBeInTheDocument()
    expect(screen.getByText(/45 puntos/i)).toBeInTheDocument()
  })

  it('displays punishment details', () => {
    render(<LoserBoard {...mockProps} />)
    expect(screen.getByText('INVITAR A CAÑAS')).toBeInTheDocument()
    expect(screen.getByText(/Toda la tarde/i)).toBeInTheDocument()
  })

  it('applies grayscale class to the avatar', () => {
    const { container } = render(<LoserBoard {...mockProps} />)
    const avatar = container.querySelector('.grayscale')
    expect(avatar).toBeInTheDocument()
  })
})
