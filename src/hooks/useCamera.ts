import { useState, useCallback, useRef } from 'react'

export type CameraError = 'PERMISSION_DENIED' | 'NOT_FOUND' | 'UNKNOWN'

export interface UseCameraReturn {
  /** El stream de vídeo activo */
  stream: MediaStream | null
  /** Error si la cámara no pudo iniciarse */
  error: CameraError | null
  /** Si se está usando la cámara frontal */
  isFrontCamera: boolean
  /** Inicia el stream de la cámara */
  startCamera: () => Promise<void>
  /** Detiene el stream de la cámara */
  stopCamera: () => void
  /** Alterna entre cámara frontal y trasera */
  toggleCamera: () => void
  /** Captura un frame del vídeo y lo devuelve como Blob */
  takePhoto: (videoRef: HTMLVideoElement) => Promise<Blob | null>
}

/**
 * Hook useCamera: Gestiona el acceso al hardware de la cámara del dispositivo.
 * Maneja permisos, streams y captura de imágenes.
 */
export function useCamera(): UseCameraReturn {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<CameraError | null>(null)
  const [isFrontCamera, setIsFrontCamera] = useState(true)
  const streamRef = useRef<MediaStream | null>(null)

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
      setStream(null)
    }
  }, [])

  const startCamera = useCallback(async () => {
    stopCamera()
    setError(null)

    try {
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: isFrontCamera ? 'user' : 'environment',
          width: { ideal: 1080 },
          height: { ideal: 1350 } // Formato 4:5 para VoteCard
        },
        audio: false
      }

      const newStream = await navigator.mediaDevices.getUserMedia(constraints)
      streamRef.current = newStream
      setStream(newStream)
    } catch (err: any) {
      console.error('Camera Error:', err)
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setError('PERMISSION_DENIED')
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        setError('NOT_FOUND')
      } else {
        setError('UNKNOWN')
      }
    }
  }, [isFrontCamera, stopCamera])

  const toggleCamera = useCallback(() => {
    setIsFrontCamera(prev => !prev)
  }, [])

  const takePhoto = useCallback(async (videoRef: HTMLVideoElement): Promise<Blob | null> => {
    if (!videoRef) return null

    const canvas = document.createElement('canvas')
    canvas.width = videoRef.videoWidth
    canvas.height = videoRef.videoHeight
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    // Si es cámara frontal, invertimos el canvas para que la foto no salga efecto espejo
    if (isFrontCamera) {
      ctx.translate(canvas.width, 0)
      ctx.scale(-1, 1)
    }

    ctx.drawImage(videoRef, 0, 0)

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob)
      }, 'image/jpeg', 0.85)
    })
  }, [isFrontCamera])

  return {
    stream,
    error,
    isFrontCamera,
    startCamera,
    stopCamera,
    toggleCamera,
    takePhoto
  }
}
