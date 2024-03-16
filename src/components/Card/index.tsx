import { Container, Time, Title, Diet, Bar } from './styles'

interface CardProps {
  time: string
  name: string
  inDiet: boolean
}

export function Card({ time, name, inDiet }: CardProps) {
  return (
    <Container>
      <Time>{time}</Time>
      <Bar>|</Bar>
      <Title numberOfLines={1}>{name}</Title>
      <Diet inDiet={inDiet}>{inDiet}</Diet>
    </Container>
  )
}
