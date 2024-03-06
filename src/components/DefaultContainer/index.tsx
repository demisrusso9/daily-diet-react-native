import { KeyboardAvoidingView, Platform } from 'react-native'
import { Container } from './styles'

interface DefaultContainerProps {
  children: React.ReactNode
}

export function DefaultContainer({ children }: DefaultContainerProps) {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled={Platform.OS === 'ios'}
        behavior='padding'
      />
      {children}
    </Container>
  )
}
