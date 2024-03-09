import {
  Container,
  IconArrowLeft,
  IconArrowUpRight,
  Title,
  Percentage,
  Description,
  ButtonIcon,
  IconButtonProps,
  ContainerProps
} from './styles'
import { TouchableOpacityProps } from 'react-native'

interface StatisticsProps
  extends IconButtonProps,
    ContainerProps,
    TouchableOpacityProps {}

export function Statistics({
  icon,
  variant,
  size = 'small',
  ...rest
}: StatisticsProps) {
  return (
    <Container variant={variant} size={size}>
      <ButtonIcon icon={icon} size={size} {...rest}>
        {icon === 'arrow-left' ? (
          <IconArrowLeft variant={variant} />
        ) : (
          <IconArrowUpRight variant={variant} />
        )}
      </ButtonIcon>

      {size === 'medium' ? (
        <Title>Nova Refeição</Title>
      ) : (
        <>
          <Percentage>90,86%</Percentage>
          <Description>das refeições dentro da dieta</Description>
        </>
      )}
    </Container>
  )
}
