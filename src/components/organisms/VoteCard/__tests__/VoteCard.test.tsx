import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { VoteCard } from '../VoteCard'

describe('VoteCard Organism', () => {
  const mockProps = {
    name: 'MIGUEL',
    face: 'face-3' as const,
    pose: 'SALTANDO',
    uploadTime: '12:30',
  }

  it('renders correctly with name and metadata', () => {
    render(<VoteCard {...mockProps} />)
    expect(screen.getByText('MIGUEL')).toBeInTheDocument()
    expect(screen.getByText('SALTANDO')).toBeInTheDocument()
  })

  it('calls onVote with correct value when a vote button is clicked', () => {
    const onVote = vi.fn()
    render(<VoteCard {...mockProps} onVote={onVote} />)
    
    const voteBtn = screen.getByText('2')
    fireEvent.click(voteBtn)
    
    expect(onVote).toHaveBeenCalledWith('2')
  })

  it('displays the current selected vote sticker for PB', () => {
    render(<VoteCard {...mockProps} currentVote="PB" />)
    expect(screen.getByText('¡PUES BIEN!')).toBeInTheDocument()
  })
})
