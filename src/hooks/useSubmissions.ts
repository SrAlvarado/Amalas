import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

/**
 * Hook useSubmissions: Gestiona la subida de fotos y el registro de entregas.
 * Calcula automáticamente las penalizaciones de puntos según la hora de entrega.
 */
export function useSubmissions() {
  const { user } = useAuth()
  const [isUploading, setIsUploading] = useState(false)

  const uploadSubmission = async (
    challengeId: string, 
    squadId: string, 
    photoBlob: Blob, 
    endTime: string
  ) => {
    if (!user) return { error: 'No authenticated user' }
    setIsUploading(true)

    try {
      // 1. Subir al Storage
      const fileName = `${user.id}/${challengeId}_${Date.now()}.jpg`
      const { data: storageData, error: storageError } = await supabase.storage
        .from('photos')
        .upload(fileName, photoBlob)

      if (storageError) throw storageError

      const photoUrl = storageData.path

      // 2. Calcular Penalización
      const now = new Date()
      const end = new Date(endTime)
      const diffMinutes = (now.getTime() - end.getTime()) / (1000 * 60)
      
      let penaltyPoints = 0
      if (diffMinutes > 15) {
        penaltyPoints = -2
      }

      // 3. Registrar en DB
      const { error: dbError } = await supabase
        .from('submissions')
        .insert({
          challenge_id: challengeId,
          profile_id: user.id,
          squad_id: squadId,
          photo_url: photoUrl,
          penalty_points: penaltyPoints
        })

      if (dbError) throw dbError

      return { success: true, penalty: penaltyPoints }
    } catch (err: any) {
      console.error('Submission Error:', err)
      return { error: err.message }
    } finally {
      setIsUploading(false)
    }
  }

  return { uploadSubmission, isUploading }
}
