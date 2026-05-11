import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SocialAuthButton } from '../SocialAuthButton'

describe('SocialAuthButton Molecule', () => {
  it('renders Google provider correctly', () => {
    render(<SocialAuthButton provider="google" />)
    const button = screen.getByRole('button', { name: /GOOGLE/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-white', 'text-black')
  })

  it('renders Apple provider correctly', () => {
    render(<SocialAuthButton provider="apple" />)
    const button = screen.getByRole('button', { name: /APPLE/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-black', 'text-white')
  })
})
