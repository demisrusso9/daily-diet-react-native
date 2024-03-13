import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@/screens/Home'
import { Stats } from '@/screens/Stats'
import { Meal } from '@/screens/Meal'
import { DietMessage } from '@/screens/DietMessage'

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='stats' component={Stats} />
      <Screen name='meal' component={Meal} />
      <Screen name='dietMessage' component={DietMessage} />
    </Navigator>
  )
}
