import { useNavigation } from '@react-navigation/native'
import { Layout } from '@/layout'
import { Header } from '@/components/Header'
import { Statistics } from '@/components/Statistics'
import { Button } from '@/components/Button'

import { Content, Title } from './styles'

export function Home() {
  const { navigate } = useNavigation()
  const number = 50

  function handleNavigateToStatistics() {
    navigate('stats')
  }

  function handleNavigateToMeal() {
    navigate('meal')
  }

  const variantByPercentage = () => {
    return number >= 50 ? 'primary' : 'secondary'
  }

  return (
    <Layout>
      <Header />

      <Statistics
        onPress={handleNavigateToStatistics}
        icon='arrow-up-right'
        variant={variantByPercentage()}
        size='small'
      />

      <Content>
        <Title>Refeições</Title>
        <Button text='Nova Refeição' showIcon onPress={handleNavigateToMeal} />
      </Content>
    </Layout>
  )
}
