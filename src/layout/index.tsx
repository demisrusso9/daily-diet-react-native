import { KeyboardAvoidingView, Platform } from 'react-native'
import { Container } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled={Platform.OS === 'ios'}
        behavior='padding'
      >
        {children}
      </KeyboardAvoidingView>
    </Container>
  )
}
