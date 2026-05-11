import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SocialAuthButton } from '../SocialAuthButton'

describe('SocialAuthButton Molecule', () => {
  it('renders Google provider correctly', () => {
    render(<SocialAuthButton provider="google" />)
    expect(screen.getByText(/Google/i)).toBeInTheDocument()
  })

  it('renders Apple provider correctly', () => {
    render(<SocialAuthButton provider="apple" />)
    expect(screen.getByText(/Apple/i)).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<SocialAuthButton provider="google" onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
