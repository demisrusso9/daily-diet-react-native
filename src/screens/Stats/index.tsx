import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Statistics } from '@/components/Statistics'
import { StatisticsCards } from '@/components/StatisticsCards'

import { Content, RowCards, Text } from './styles'
import { useDiet } from '@/hooks/useDiet'

export function Stats() {
  const { statistics, variantByPercentage, fetchStatistics } = useDiet()

  const { navigate } = useNavigation()

  function handleNavigateToHome() {
    navigate('home')
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
        percentage={statistics.percentage}
      />

      <Content>
        <Text>Estatísticas gerais</Text>

        <StatisticsCards
          number={statistics.totalInDietSequence}
          description='melhor sequência de pratos dentro da dieta'
        />

        <StatisticsCards
          number={statistics.totalMeals}
          description='refeições registradas'
        />

        <RowCards>
          <StatisticsCards
            variant='primary'
            number={statistics.totalInDiet}
            description='refeições dentro da dieta'
          />

          <StatisticsCards
            variant='secondary'
            number={statistics.totalOffDiet}
            description='refeições fora da dieta'
          />
        </RowCards>
      </Content>
    </>
  )
}
