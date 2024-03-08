import { useNavigation } from '@react-navigation/native'
import { Layout } from '@/layout'
import { Header } from '@/components/Header'
import { Statistics } from '@/components/Statistics'
import { Button } from '@/components/Button'

import { Content, Title } from './styles'

export function Home() {
  const { navigate } = useNavigation()

  function handleNavigateToStatistics() {
    navigate('stats')
  }

  return (
    <Layout>
      <Header />

      <Statistics onPress={handleNavigateToStatistics} icon='arrow-up-right' />

      <Content>
        <Title>Refeições</Title>
        <Button text='Nova Refeição' showIcon />
      </Content>
    </Layout>
  )
}
