import { useNavigation } from '@react-navigation/native'
import { Statistics } from '@/components/Statistics'
import { StatisticsCards } from '@/components/StatisticsCards'
import { Content, RowCards, Text } from './styles'
import { StatsProps, mealGetStatistics } from '@/storage/meal/mealGetStatistics'
import { Alert } from 'react-native'
import { useEffect, useState } from 'react'

export function Stats() {
  const [stats, setStats] = useState({} as StatsProps)
  const { navigate } = useNavigation()

  function handleNavigateToHome() {
    navigate('home')
  }

  const variantByPercentage = () => {
    return stats.percentage >= 50 ? 'primary' : 'secondary'
  }

  async function fetchStatistics() {
    try {
      const data = await mealGetStatistics()
      setStats(data)
    } catch (error) {
      Alert.alert('Estatísticas', 'Não foi possível buscar as estatísticas')
    }
  }

  useEffect(() => {
    fetchStatistics()
  }, [])

  return (
    <>
      <Statistics
        onPress={handleNavigateToHome}
        icon='arrow-left'
        variant={variantByPercentage()}
        size='large'
        percentage={stats.percentage}
      />

      <Content>
        <Text>Estatísticas gerais</Text>

        <StatisticsCards
          number={stats.totalInDietSequence}
          description='melhor sequência de pratos dentro da dieta'
        />

        <StatisticsCards
          number={stats.totalMeals}
          description='refeições registradas'
        />

        <RowCards>
          <StatisticsCards
            variant='primary'
            number={stats.totalInDiet}
            description='refeições dentro da dieta'
          />

          <StatisticsCards
            variant='secondary'
            number={stats.totalOffDiet}
            description='refeições fora da dieta'
          />
        </RowCards>
      </Content>
    </>
  )
}
