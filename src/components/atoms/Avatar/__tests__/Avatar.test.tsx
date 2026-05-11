import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Avatar } from '../Avatar'

describe('Avatar Component', () => {
  it('renders with default props', () => {
    render(<Avatar />)
    const avatar = screen.getByLabelText('Usuario')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass('w-11', 'h-11') // md size
    expect(avatar).toHaveClass('bg-white')
  })

  it('applies face classes correctly', () => {
    render(<Avatar face="face-3" />)
    const avatar = screen.getByLabelText('Usuario')
    expect(avatar).toHaveClass('face-3')
  })

  it('applies size classes correctly', () => {
    render(<Avatar size="xl" />)
    const avatar = screen.getByLabelText('Usuario')
    expect(avatar).toHaveClass('w-20', 'h-20')
  })

  it('adds isYou highlighting classes', () => {
    render(<Avatar isYou={true} />)
    const avatar = screen.getByLabelText('Usuario')
    expect(avatar).toHaveClass('ring-2', 'ring-[#EF233C]')
  })

  it('renders children', () => {
    render(
      <Avatar>
        <span data-testid="avatar-child">X</span>
      </Avatar>
    )
    expect(screen.getByTestId('avatar-child')).toBeInTheDocument()
  })

  it('renders an image when src is provided', () => {
    render(<Avatar src="test-image.jpg" alt="Test Avatar" />)
    const img = screen.getByAltText('Test Avatar')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'test-image.jpg')
  })
})
