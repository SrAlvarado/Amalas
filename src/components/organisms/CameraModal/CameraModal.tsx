import { useRef, useEffect, useState } from 'react'
import { Icon } from '../../atoms/Icon'
import { ComicButton } from '../../atoms/ComicButton'
import { useCamera } from '../../../hooks/useCamera'

export interface CameraModalProps {
  /** Indica si el modal está abierto */
  isOpen: boolean
  /** Callback al cerrar el modal */
  onClose: () => void
  /** Callback al capturar una foto con éxito */
  onPhotoCaptured: (photo: Blob) => void
}

/**
 * Organismo CameraModal: Interfaz de captura fotográfica.
 * Maneja el stream de vídeo en vivo, el disparo y la previsualización antes de subir.
 */
export function CameraModal({
  isOpen,
  onClose,
  onPhotoCaptured,
}: CameraModalProps) {
  const { 
    stream, 
    error, 
    isFrontCamera, 
    startCamera, 
    stopCamera, 
    toggleCamera, 
    takePhoto 
  } = useCamera()
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [capturedBlob, setCapturedBlob] = useState<Blob | null>(null)

  // Iniciar/Detener cámara al abrir/cerrar modal
  useEffect(() => {
    if (isOpen) {
      startCamera()
    } else {
      stopCamera()
      setPreviewUrl(null)
      setCapturedBlob(null)
    }
  }, [isOpen, startCamera, stopCamera])

  // Vincular stream al video element
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  // Acción de disparar
  const handleShoot = async () => {
    if (videoRef.current) {
      const blob = await takePhoto(videoRef.current)
      if (blob) {
        const url = URL.createObjectURL(blob)
        setPreviewUrl(url)
        setCapturedBlob(blob)
      }
    }
  }

  // Acción de repetir
  const handleRepeat = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(null)
    setCapturedBlob(null)
  }

  // Acción de subir
  const handleUpload = () => {
    if (capturedBlob) {
      onPhotoCaptured(capturedBlob)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm z-10">
        <button onClick={onClose} aria-label="Cerrar cámara" className="text-white p-2">
          <Icon size={24}><path d="M18 6L6 18M6 6l12 12" /></Icon>
        </button>
        <div className="font-display text-[#FFD60A] text-[20px] uppercase">
          CÁMARA GAMBERRA
        </div>
        <button onClick={toggleCamera} aria-label="Cambiar cámara" className="text-white p-2">
          <Icon size={24}><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/><circle cx="12" cy="13" r="4"/></Icon>
        </button>
      </div>

      {/* Main Viewport */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-zinc-900">
        {!previewUrl ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`w-full h-full object-cover ${isFrontCamera ? 'scale-x-[-1]' : ''}`}
            />
            {error && (
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className="bg-[#EF233C] border-[3px] border-black p-4 shadow-comic">
                  <p className="font-display text-white text-[18px]">¡ERROR FATAL!</p>
                  <p className="font-heavy text-white/90 text-[12px] mt-1 uppercase">
                    {error === 'PERMISSION_DENIED' 
                      ? 'No nos has dado permiso, ¡así no se puede!' 
                      : 'No encontramos tu cámara. ¿La has perdido?'}
                  </p>
                  <ComicButton variant="white" size="sm" className="mt-3" onClick={startCamera}>
                    REINTENTAR
                  </ComicButton>
                </div>
              </div>
            )}
          </>
        ) : (
          <img 
            src={previewUrl} 
            alt="Captura" 
            className="w-full h-full object-cover animate-in zoom-in duration-300" 
          />
        )}
      </div>

      {/* Footer Controls */}
      <div className="p-8 bg-black/80 backdrop-blur-md border-t-[3.5px] border-white/20">
        {!previewUrl ? (
          <div className="flex justify-center">
            <button
              onClick={handleShoot}
              disabled={!!error || !stream}
              aria-label="Disparar"
              className="w-20 h-20 bg-white rounded-full border-[5px] border-[#1B6CFF] flex items-center justify-center active:scale-95 transition-transform disabled:opacity-30"
            >
              <div className="w-14 h-14 bg-white border-[3px] border-black rounded-full" />
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <ComicButton 
              variant="white" 
              className="flex-1" 
              onClick={handleRepeat}
            >
              REPETIR
            </ComicButton>
            <ComicButton 
              variant="secondary" 
              className="flex-1" 
              halftone 
              onClick={handleUpload}
            >
              ¡SUBIR FOTO!
            </ComicButton>
          </div>
        )}
      </div>

      {/* Comic Frame Overlay */}
      <div className="absolute inset-0 border-[10px] border-black pointer-events-none" />
    </div>
  )
}
