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
    TouchableOpacityProps {
  percentage?: number
  text?: string
}

export function Statistics({
  icon,
  variant,
  size = 'small',
  percentage,
  text,
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
        <Title>{text}</Title>
      ) : (
        <>
          <Percentage>{percentage ? percentage : 0}%</Percentage>
          <Description>das refeições dentro da dieta</Description>
        </>
      )}
    </Container>
  )
}
