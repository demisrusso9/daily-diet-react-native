import { useNavigation } from '@react-navigation/native'
import { Statistics } from '@/components/Statistics'
import { StatisticsCards } from '@/components/StatisticsCards'
import { Content, RowCards, Text } from './styles'

export function Stats() {
  const number = 50
  const { navigate } = useNavigation()

  function handleNavigateToHome() {
    navigate('home')
  }

  const variantByPercentage = () => {
    return number >= 50 ? 'primary' : 'secondary'
  }

  return (
    <>
      <Statistics
        onPress={handleNavigateToHome}
        icon='arrow-left'
        variant={variantByPercentage()}
        size='large'
      />

      <Content>
        <Text>Estatísticas gerais</Text>

        <StatisticsCards
          number={22}
          description='melhor sequência de pratos dentro da dieta'
        />

        <StatisticsCards number={109} description='refeições registradas' />

        <RowCards>
          <StatisticsCards
            variant='primary'
            number={99}
            description='refeições dentro da dieta'
          />

          <StatisticsCards
            variant='secondary'
            number={10}
            description='refeições fora da dieta'
          />
        </RowCards>
      </Content>
    </>
  )
}
