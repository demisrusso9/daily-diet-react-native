import { Container, Time, Title, Diet, Bar } from './styles'

interface CardProps {
  card: {
    time: string
    title: string
    inDiet: boolean
  }
}

export function Card({ card }: CardProps) {
  return (
    <Container>
      <Time>{card.time}</Time>
      <Bar>|</Bar>
      <Title numberOfLines={1}>{card.title}</Title>
      <Diet inDiet={card.inDiet}>{card.inDiet}</Diet>
    </Container>
  )
}
