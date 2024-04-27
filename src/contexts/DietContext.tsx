import { Alert } from 'react-native'
import { StatsProps, mealGetStatistics } from '@/storage/meal/mealGetStatistics'
import { ReactNode, createContext, useState } from 'react'
import { mealGetAll } from '@/storage/meal/mealGetAll'
import { MealType } from '@/@interface/meal'

interface DietProviderProps {
  children: ReactNode
}

interface DietContextData {
  cards: MealType[]
  statistics: StatsProps
  fetchStatistics: () => void
  fetchMeals: () => void
  variantByPercentage: () => 'primary' | 'secondary'
}

export const DietContext = createContext({} as DietContextData)

export function DietContextProvider({ children }: DietProviderProps) {
  const [cards, setCards] = useState<MealType[]>([])
  const [percentage, setPercentage] = useState(0)
  const [statistics, setStatistics] = useState({} as StatsProps)

  async function fetchStatistics() {
    try {
      const data = await mealGetStatistics()

      setStatistics(data)
      setPercentage(data.percentage)
    } catch (error) {
      Alert.alert('Estatísticas', 'Não foi possível buscar as estatísticas')
    }
  }

  async function fetchMeals() {
    try {
      const data = await mealGetAll()
      setCards(data)
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível buscar as refeições')
    }
  }

  function variantByPercentage() {
    return percentage >= 50 ? 'primary' : 'secondary'
  }

  return (
    <DietContext.Provider
      value={{
        cards,
        statistics,
        fetchStatistics,
        fetchMeals,
        variantByPercentage
      }}
    >
      {children}
    </DietContext.Provider>
  )
}
