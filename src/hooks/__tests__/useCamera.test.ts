import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useCamera } from '../useCamera'

describe('useCamera Hook', () => {
  const mockStream = {
    getTracks: vi.fn().mockReturnValue([{ stop: vi.fn() }]),
  }

  beforeEach(() => {
    vi.restoreAllMocks()
    
    // Mock navigator.mediaDevices
    Object.defineProperty(global.navigator, 'mediaDevices', {
      writable: true,
      value: {
        getUserMedia: vi.fn().mockResolvedValue(mockStream),
      },
    })
  })

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useCamera())
    expect(result.current.stream).toBeNull()
    expect(result.current.error).toBeNull()
    expect(result.current.isFrontCamera).toBe(true)
  })

  it('should start camera and update stream', async () => {
    const { result } = renderHook(() => useCamera())
    
    await act(async () => {
      await result.current.startCamera()
    })

    expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalled()
    expect(result.current.stream).toBe(mockStream)
  })

  it('should handle permission denied error', async () => {
    vi.mocked(navigator.mediaDevices.getUserMedia).mockRejectedValueOnce({
      name: 'NotAllowedError'
    })

    const { result } = renderHook(() => useCamera())
    
    await act(async () => {
      await result.current.startCamera()
    })

    expect(result.current.error).toBe('PERMISSION_DENIED')
    expect(result.current.stream).toBeNull()
  })

  it('should toggle isFrontCamera state', () => {
    const { result } = renderHook(() => useCamera())
    
    act(() => {
      result.current.toggleCamera()
    })

    expect(result.current.isFrontCamera).toBe(false)
  })

  it('should stop camera tracks when stopCamera is called', async () => {
    const { result } = renderHook(() => useCamera())
    
    await act(async () => {
      await result.current.startCamera()
    })

    act(() => {
      result.current.stopCamera()
    })

    expect(mockStream.getTracks()[0].stop).toHaveBeenCalled()
    expect(result.current.stream).toBeNull()
  })
})
