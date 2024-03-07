import { Container, Number, Description, CardsProps } from './styles'

interface StatisticsCardsProps extends CardsProps {
  number: number
  description: string
}

export function StatisticsCards({
  number,
  description,
  variant = 'default'
}: StatisticsCardsProps) {
  return (
    <Container variant={variant}>
      <Number>{number}</Number>
      <Description>{description}</Description>
    </Container>
  )
}
