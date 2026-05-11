import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeCard } from '../ThemeCard'

describe('ThemeCard Organism', () => {
  it('renders title and description', () => {
    render(<ThemeCard title="TEST TITLE" description="TEST DESCRIPTION" />)
    expect(screen.getByText(/TEST TITLE/)).toBeInTheDocument()
    expect(screen.getByText(/TEST DESCRIPTION/)).toBeInTheDocument()
  })

  it('renders burst text when provided', () => {
    render(<ThemeCard title="T" description="D" burstText="BURST!" />)
    expect(screen.getByText(/BURST!/)).toBeInTheDocument()
  })

  it('displays the proponent name', () => {
    render(<ThemeCard title="T" description="D" proposedBy="JON" />)
    expect(screen.getByText(/@JON/)).toBeInTheDocument()
  })

  it('renders participation avatars', () => {
    const { container } = render(
      <ThemeCard title="T" description="D" friendFaces={['face-1', 'face-2']} />
    )
    // Avatar components
    const avatars = container.querySelectorAll('.w-8.h-8')
    expect(avatars.length).toBe(2)
  })

  it('shows overflow count for many avatars', () => {
    render(
      <ThemeCard 
        title="T" 
        description="D" 
        friendFaces={['face-1', 'face-2', 'face-3', 'face-4', 'face-5']} 
      />
    )
    expect(screen.getByText('+2')).toBeInTheDocument()
  })
})
