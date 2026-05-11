import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Avatar } from '../Avatar'

describe('Avatar Atom', () => {
  it('renders correctly with required face prop', () => {
    render(<Avatar face="face-1" />)
    const avatar = screen.getByText('😎')
    expect(avatar).toBeInTheDocument()
  })

  it('applies correct size classes', () => {
    const { container } = render(<Avatar face="face-2" size="xl" />)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('w-24 h-24')
  })

  it('renders without border when border={false}', () => {
    const { container } = render(<Avatar face="face-3" border={false} />)
    const div = container.firstChild as HTMLElement
    expect(div.className).not.toContain('border-[3px]')
  })

  it('applies custom className', () => {
    const { container } = render(<Avatar face="face-4" className="custom-class" />)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('custom-class')
  })
})
