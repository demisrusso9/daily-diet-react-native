import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@/screens/Home'
import { Stats } from '@/screens/Stats'
import { Meal } from '@/screens/Meal'
import { DietStatusMessage } from '@/screens/DietStatusMessage'
import { View } from '@/screens/View'

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='stats' component={Stats} />
      <Screen name='meal' component={Meal} />
      <Screen name='dietStatusMessage' component={DietStatusMessage} />
      <Screen name='view' component={View} />
    </Navigator>
  )
}
