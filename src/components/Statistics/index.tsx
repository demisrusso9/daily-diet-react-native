import {
  Container,
  IconArrowLeft,
  IconArrowUpRight,
  Percentage,
  Description,
  ButtonIcon,
  IconButtonProps
} from './styles'
import { TouchableOpacityProps } from 'react-native'

interface StatisticsProps extends IconButtonProps, TouchableOpacityProps {}

export function Statistics({ icon, ...rest }: StatisticsProps) {
  return (
    <Container>
      <ButtonIcon icon={icon} {...rest}>
        {icon === 'arrow-left' ? <IconArrowLeft /> : <IconArrowUpRight />}
      </ButtonIcon>

      <Percentage>90,86%</Percentage>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  )
}
