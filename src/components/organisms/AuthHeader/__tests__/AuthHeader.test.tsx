import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AuthHeader } from '../AuthHeader'

describe('AuthHeader Organism', () => {
  it('renders logo and message', () => {
    render(<AuthHeader title="HOLA" message="TEST MESSAGE" />)
    expect(screen.getByText(/A\s*MALAS/i)).toBeInTheDocument()
    expect(screen.getByText('HOLA')).toBeInTheDocument()
    expect(screen.getByText('TEST MESSAGE')).toBeInTheDocument()
  })

  it('renders beta tag', () => {
    render(<AuthHeader title="T" message="M" />)
    expect(screen.getByText('BETA')).toBeInTheDocument()
  })
})
