import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BottomNav } from '../BottomNav'

describe('BottomNav Organism', () => {
  it('renders all navigation items', () => {
    render(<BottomNav activeTab="reto" onTabChange={() => {}} />)
    expect(screen.getByText('RETO')).toBeInTheDocument()
    expect(screen.getByText('JUICIO')).toBeInTheDocument()
    expect(screen.getByText('EL MURO')).toBeInTheDocument()
  })

  it('calls onTabChange with the correct id when a tab is clicked', () => {
    const handleChange = vi.fn()
    render(<BottomNav activeTab="reto" onTabChange={handleChange} />)
    
    fireEvent.click(screen.getByText('JUICIO'))
    expect(handleChange).toHaveBeenCalledWith('juicio')
    
    fireEvent.click(screen.getByText('EL MURO'))
    expect(handleChange).toHaveBeenCalledWith('muro')
  })

  it('highlights the active tab', () => {
    const { rerender } = render(<BottomNav activeTab="reto" onTabChange={() => {}} />)
    expect(screen.getByRole('button', { name: /reto/i })).toHaveAttribute('aria-current', 'page')
    
    rerender(<BottomNav activeTab="juicio" onTabChange={() => {}} />)
    expect(screen.getByRole('button', { name: /juicio/i })).toHaveAttribute('aria-current', 'page')
  })
})
