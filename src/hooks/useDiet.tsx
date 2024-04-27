import { useContext } from 'react'
import { DietContext } from '@/contexts/DietContext'

export function useDiet() {
  return useContext(DietContext)
}
