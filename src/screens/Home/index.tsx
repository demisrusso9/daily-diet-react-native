import { Layout } from '@/layout'
import { Header } from '@/components/Header'
import { Statistics } from '@/components/Statistics'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const { navigate } = useNavigation()

  function handleNavigateToStatistics() {
    navigate('statistics')
  }

  return (
    <Layout>
      <Header />

      <Statistics onPress={handleNavigateToStatistics} icon='arrow-up-right' />
    </Layout>
  )
}
