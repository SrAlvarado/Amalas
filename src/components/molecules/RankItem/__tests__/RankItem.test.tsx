import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RankItem } from '../RankItem'

describe('RankItem Molecule', () => {
  it('renders all user data correctly', () => {
    render(<RankItem pos={1} name="JON" pts={50} face="face-6" trend={5} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('JON')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText(/↑ \+5/)).toBeInTheDocument()
  })

  it('renders negative trend correctly', () => {
    render(<RankItem pos={2} name="PAU" pts={30} face="face-3" trend={-2} />)
    expect(screen.getByText(/↓ -2/)).toBeInTheDocument()
  })

  it('renders equal trend correctly', () => {
    render(<RankItem pos={3} name="INES" pts={20} face="face-4" trend={0} />)
    expect(screen.getByText(/— igual/)).toBeInTheDocument()
  })

  it('applies isYou styles and tag', () => {
    const { container } = render(<RankItem pos={4} name="TÚ" pts={28} face="face-5" isYou={true} />)
    expect(container.firstChild).toHaveClass('ring-2', 'ring-[#1B6CFF]')
    expect(screen.getAllByText('TÚ')[0]).toBeInTheDocument()
  })
})
