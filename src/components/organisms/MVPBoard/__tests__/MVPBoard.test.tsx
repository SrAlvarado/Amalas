import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MVPBoard } from '../MVPBoard'

describe('MVPBoard Organism', () => {
  it('renders name and points correctly', () => {
    render(<MVPBoard name="LAIA" face="face-2" pts={42} trend={7} />)
    expect(screen.getByText(/LAIA/i)).toBeInTheDocument()
    expect(screen.getByText(/42/)).toBeInTheDocument()
    expect(screen.getByText(/↑ \+7/)).toBeInTheDocument()
  })

  it('displays the reward text', () => {
    render(<MVPBoard name="L" face="face-2" pts={1} trend={1} reward="CUSTOM REWARD" />)
    expect(screen.getByText('CUSTOM REWARD')).toBeInTheDocument()
  })
})
