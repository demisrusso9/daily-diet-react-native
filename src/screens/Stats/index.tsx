import { useNavigation } from '@react-navigation/native'
import { Statistics } from '@/components/Statistics'
import { StatisticsCards } from '@/components/StatisticsCards'
import { Container, Content, RowCards, Text } from './styles'

export function Stats() {
  const { navigate } = useNavigation()

  function handleNavigateToHome() {
    navigate('home')
  }

  return (
    <>
      <Container>
        <Statistics onPress={handleNavigateToHome} icon='arrow-left' />
      </Container>

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
