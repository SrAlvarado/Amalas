import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { RankItem } from '../RankItem'

describe('RankItem Molecule', () => {
  const mockProps = {
    pos: 1,
    name: 'JUAN',
    pts: 100,
    face: 'face-1' as const,
  }

  it('renders all user data correctly', () => {
    render(<RankItem {...mockProps} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('JUAN')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    // Avatar emoji for face-1
    expect(screen.getByText('😎')).toBeInTheDocument()
  })

  it('renders trend correctly', () => {
    const { container } = render(<RankItem {...mockProps} trend={1} />)
    const trend = container.querySelector('.bg-green-500')
    expect(trend).toBeInTheDocument()
  })

  it('applies isYou styles and tag', () => {
    render(<RankItem {...mockProps} isYou={true} />)
    expect(screen.getByText('(TÚ)')).toBeInTheDocument()
  })
})
