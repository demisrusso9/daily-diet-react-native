import { useNavigation } from '@react-navigation/native'
import { Statistics } from '@/components/Statistics'
import { Content } from './styles'

export function Meal() {
  const { navigate } = useNavigation()

  function handleNavigateToHome() {
    navigate('home')
  }

  return (
    <>
      <Statistics
        onPress={handleNavigateToHome}
        icon='arrow-left'
        size='medium'
        variant='default'
      />

      <Content></Content>
    </>
  )
}
