import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Title,
  IconPlus,
  IconTrash,
  IconPencilSimpleLine
} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  text: string
  icon?: 'plus' | 'trash' | 'pencil'
  transparent?: boolean
}

export function Button({ text, icon, transparent, ...rest }: ButtonProps) {
  return (
    <Container transparent={transparent} {...rest}>
      {icon === 'plus' && <IconPlus transparent={transparent} />}
      {icon === 'trash' && <IconTrash transparent={transparent} />}
      {icon === 'pencil' && <IconPencilSimpleLine transparent={transparent} />}

      <Title transparent={transparent}>{text}</Title>
    </Container>
  )
}
