import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { VoteCard } from '../VoteCard'

describe('VoteCard Organism', () => {
  const defaultProps = {
    name: 'MARCOS',
    face: 'face-1' as const,
    pose: 'POSE',
    uploadTime: '00:00',
    currentVote: null,
    onVote: vi.fn(),
  }

  it('renders correctly with name and metadata', () => {
    render(<VoteCard {...defaultProps} />)
    expect(screen.getByText(/FOTO DE/i)).toBeInTheDocument()
    expect(screen.getByText(/@marcos/)).toBeInTheDocument()
    expect(screen.getByText('POSE')).toBeInTheDocument()
  })

  it('calls onVote with correct value when a vote button is clicked', () => {
    render(<VoteCard {...defaultProps} />)
    
    fireEvent.click(screen.getByText(/3/))
    expect(defaultProps.onVote).toHaveBeenCalledWith('3')
    
    fireEvent.click(screen.getByText(/PUES BIEN/i))
    expect(defaultProps.onVote).toHaveBeenCalledWith('PB')
  })

  it('displays the current selected vote in the status tag', () => {
    render(<VoteCard {...defaultProps} currentVote="2" />)
    expect(screen.getByText('TU VOTO: 2')).toBeInTheDocument()
  })
})
