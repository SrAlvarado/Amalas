import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CameraModal } from '../CameraModal'
import * as useCameraHook from '../../../../hooks/useCamera'

// Mock the hook
vi.mock('../../../../hooks/useCamera', () => ({
  useCamera: vi.fn()
}))

describe('CameraModal Organism', () => {
  const mockStartCamera = vi.fn()
  const mockStopCamera = vi.fn()
  const mockTakePhoto = vi.fn().mockResolvedValue(new Blob(['test'], { type: 'image/jpeg' }))
  const mockToggleCamera = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    ;(useCameraHook.useCamera as any).mockReturnValue({
      stream: {},
      error: null,
      isFrontCamera: true,
      startCamera: mockStartCamera,
      stopCamera: mockStopCamera,
      toggleCamera: mockToggleCamera,
      takePhoto: mockTakePhoto,
    })
    
    // Mock URL.createObjectURL
    URL.createObjectURL = vi.fn().mockReturnValue('blob:test')
    URL.revokeObjectURL = vi.fn()
  })

  it('should start camera when opened', () => {
    render(<CameraModal isOpen={true} onClose={vi.fn()} onPhotoCaptured={vi.fn()} />)
    expect(mockStartCamera).toHaveBeenCalled()
  })

  it('should stop camera when closed', () => {
    const { rerender } = render(<CameraModal isOpen={true} onClose={vi.fn()} onPhotoCaptured={vi.fn()} />)
    rerender(<CameraModal isOpen={false} onClose={vi.fn()} onPhotoCaptured={vi.fn()} />)
    expect(mockStopCamera).toHaveBeenCalled()
  })

  it('should capture photo and show preview', async () => {
    render(<CameraModal isOpen={true} onClose={vi.fn()} onPhotoCaptured={vi.fn()} />)
    
    const shootButton = screen.getByLabelText('Disparar')
    fireEvent.click(shootButton)

    await waitFor(() => {
      expect(mockTakePhoto).toHaveBeenCalled()
      expect(screen.getByText('REPETIR')).toBeInTheDocument()
      expect(screen.getByText('¡SUBIR FOTO!')).toBeInTheDocument()
    })
  })

  it('should call onPhotoCaptured when upload button is clicked', async () => {
    const onPhotoCaptured = vi.fn()
    render(<CameraModal isOpen={true} onClose={vi.fn()} onPhotoCaptured={onPhotoCaptured} />)
    
    fireEvent.click(screen.getByLabelText('Disparar')) // Shoot

    await waitFor(() => {
      fireEvent.click(screen.getByText('¡SUBIR FOTO!'))
      expect(onPhotoCaptured).toHaveBeenCalledWith(expect.any(Blob))
    })
  })

  it('should reset preview when repeat is clicked', async () => {
    render(<CameraModal isOpen={true} onClose={vi.fn()} onPhotoCaptured={vi.fn()} />)
    
    fireEvent.click(screen.getByLabelText('Disparar')) // Shoot

    await waitFor(() => {
      fireEvent.click(screen.getByText('REPETIR'))
      expect(screen.queryByText('REPETIR')).not.toBeInTheDocument()
    })
  })
})
