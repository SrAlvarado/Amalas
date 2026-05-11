import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CameraModal } from './CameraModal'
import { ComicButton } from '../../atoms/ComicButton'

const meta: Meta<typeof CameraModal> = {
  title: 'Organisms/CameraModal',
  component: CameraModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof CameraModal>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="p-8">
        <ComicButton onClick={() => setIsOpen(true)}>
          ABRIR CÁMARA
        </ComicButton>
        <CameraModal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          onPhotoCaptured={(blob) => console.log('Photo captured:', blob)} 
        />
      </div>
    )
  }
}
