import { TouchableOpacityProps } from 'react-native'
import { Container, Time, Title, Diet, Bar } from './styles'

interface CardProps extends TouchableOpacityProps {
  time: string
  name: string
  inDiet: boolean
}

export function Card({ time, name, inDiet, ...rest }: CardProps) {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Bar>|</Bar>
      <Title numberOfLines={1}>{name}</Title>
      <Diet inDiet={inDiet}>{inDiet}</Diet>
    </Container>
  )
}
