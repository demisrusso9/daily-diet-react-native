import { TouchableOpacityProps } from 'react-native'
import { Container, Title, IconPLus } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  text: string
  showIcon?: boolean
}

export function Button({ text, showIcon, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {showIcon && <IconPLus />}
      <Title>{text}</Title>
    </Container>
  )
}
