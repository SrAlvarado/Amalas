import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SquadMember } from '../SquadMember'

describe('SquadMember Molecule', () => {
  it('renders name correctly', () => {
    render(<SquadMember name="JON" face="face-6" />)
    expect(screen.getByText('JON')).toBeInTheDocument()
  })

  it('shows checkmark when done is true', () => {
    render(<SquadMember name="JON" face="face-6" done={true} />)
    expect(screen.getByText('✓')).toBeInTheDocument()
  })

  it('shows question mark when done is false', () => {
    render(<SquadMember name="JON" face="face-6" done={false} />)
    expect(screen.getByText('?')).toBeInTheDocument()
  })

  it('applies isYou styles correctly', () => {
    const { container } = render(<SquadMember name="TÚ" face="face-5" isYou={true} />)
    expect(container.firstChild).toHaveClass('ring-2', 'ring-[#EF233C]')
    expect(screen.getByText('TÚ')).toBeInTheDocument()
  })
})
