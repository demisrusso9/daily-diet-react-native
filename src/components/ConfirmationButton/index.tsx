import { Text, TouchableOpacityProps } from 'react-native'
import { Container, IconDot, ContainerProps } from './styles'

interface ConfirmationButtonProps
  extends TouchableOpacityProps,
    ContainerProps {
  text: string
}

export function ConfirmationButton({
  text,
  variant,
  ...rest
}: ConfirmationButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {text === 'Sim' && <IconDot variant='primary' />}
      {text === 'Não' && <IconDot variant='secondary' />}

      <Text>{text}</Text>
    </Container>
  )
}
