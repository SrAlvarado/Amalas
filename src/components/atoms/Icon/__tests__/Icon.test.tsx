import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Icon } from '../Icon'

describe('Icon Component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <Icon>
        <circle cx="12" cy="12" r="9" />
      </Icon>
    )
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
    expect(svg).toHaveAttribute('fill', 'none')
    expect(svg).toHaveAttribute('stroke', 'currentColor')
    // El valor por defecto en Icon.tsx es 2
    expect(svg).toHaveAttribute('stroke-width', '2')
  })

  it('applies custom size and stroke', () => {
    const { container } = render(
      <Icon size={32} stroke={3}>
        <circle cx="12" cy="12" r="9" />
      </Icon>
    )
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
    expect(svg).toHaveAttribute('stroke-width', '3')
  })

  it('renders children elements', () => {
    render(
      <Icon>
        <circle cx="12" cy="12" r="9" data-testid="child-circle" />
      </Icon>
    )
    expect(screen.getByTestId('child-circle')).toBeInTheDocument()
  })

  it('adds custom className', () => {
    const { container } = render(
      <Icon className="custom-class">
        <circle cx="12" cy="12" r="9" />
      </Icon>
    )
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('custom-class')
  })
})
