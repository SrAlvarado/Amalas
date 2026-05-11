import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProgressBar } from '../ProgressBar'

describe('ProgressBar Component', () => {
  it('renders correctly with given progress', () => {
    render(<ProgressBar progress={50} />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toBeInTheDocument()
    expect(bar).toHaveAttribute('aria-valuenow', '50')
  })

  it('clamps progress between 0 and 100', () => {
    const { rerender } = render(<ProgressBar progress={-10} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')

    rerender(<ProgressBar progress={150} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('applies variant classes correctly', () => {
    const { container: yellow } = render(<ProgressBar progress={50} variant="yellow" />)
    expect(yellow.querySelector('.bg-\\[\\#FFD60A\\]')).toBeInTheDocument()

    const { container: red } = render(<ProgressBar progress={50} variant="red" />)
    expect(red.querySelector('.bg-\\[\\#EF233C\\]')).toBeInTheDocument()
  })

  it('applies size classes correctly', () => {
    const { container: lg } = render(<ProgressBar progress={50} size="lg" />)
    expect(lg.firstChild).toHaveClass('h-4')
  })
})
