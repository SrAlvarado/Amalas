import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SquadMember } from '../SquadMember'

describe('SquadMember Molecule', () => {
  it('renders name correctly', () => {
    render(<SquadMember name="PEPE" face="face-1" />)
    expect(screen.getByText('PEPE')).toBeInTheDocument()
  })

  it('shows checkmark when done is true', () => {
    const { container } = render(<SquadMember name="PEPE" face="face-1" done={true} />)
    // Buscamos el contenedor del check por su clase de fondo verde (escapando caracteres especiales de Tailwind)
    const check = container.querySelector('div[class*="bg-[#2B9348]"]')
    expect(check).toBeInTheDocument()
  })

  it('applies grayscale when done is false', () => {
    const { container } = render(<SquadMember name="PEPE" face="face-1" done={false} />)
    const avatar = container.querySelector('.grayscale')
    expect(avatar).toBeInTheDocument()
  })

  it('applies isYou styles correctly', () => {
    render(<SquadMember name="PEPE" face="face-1" isYou={true} />)
    const name = screen.getByText('TÚ')
    expect(name).toBeInTheDocument()
    expect(name.className).toContain('text-[#1B6CFF]')
  })
})
