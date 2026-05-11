import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LoserBoard } from '../LoserBoard'

describe('LoserBoard Organism', () => {
  const defaultProps = {
    pos: 12,
    name: 'JON',
    pts: 14,
    face: 'face-6' as const,
    punishmentTitle: 'PAY ROUND',
    punishmentDesc: 'NEXT MONDAY',
  }

  it('renders name, position and points', () => {
    render(<LoserBoard {...defaultProps} />)
    expect(screen.getByText('JON')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
  })

  it('displays punishment details', () => {
    render(<LoserBoard {...defaultProps} />)
    expect(screen.getByText('PAY ROUND')).toBeInTheDocument()
    expect(screen.getByText(/NEXT MONDAY/)).toBeInTheDocument()
  })

  it('applies grayscale class to the avatar', () => {
    const { container } = render(<LoserBoard {...defaultProps} />)
    const avatar = container.querySelector('.grayscale')
    expect(avatar).toBeInTheDocument()
  })
})
