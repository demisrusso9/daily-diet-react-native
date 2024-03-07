import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@/screens/Home'
import { Stats } from '@/screens/Stats'

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='stats' component={Stats} />
    </Navigator>
  )
}
