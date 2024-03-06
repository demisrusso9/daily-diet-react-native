import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import theme from '@/theme'
import { Home } from '@/screens/Home'
import { Loading } from '@/components/Loading'

export default function App() {
  const fontsLoaded = useFonts([NunitoSans_400Regular, NunitoSans_700Bold])

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  )
}
