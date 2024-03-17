import { Alert, FlatList } from 'react-native'
import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Layout } from '@/layout'
import { Header } from '@/components/Header'
import { Statistics } from '@/components/Statistics'
import { Button } from '@/components/Button'

import { Content, Date, Title } from './styles'
import { mealGetAll } from '@/storage/meal/mealGetAll'
import { Meal } from '@/storage/meal/mealCreate'
import { Card } from '@/components/Card'
import { formatTime } from '@/utils/formatTime'
import { formatDate } from '@/utils/formatDate'
import { mealGetStatistics } from '@/storage/meal/mealGetStatistics'

interface GroupedCards {
  [key: string]: Meal[]
}

export function Home() {
  const [percentage, setPercentage] = useState(0)
  const [cards, setCards] = useState<Meal[]>([])
  const { navigate } = useNavigation()

  function handleNavigateToStatistics() {
    navigate('stats')
  }

  function handleNavigateToMeal() {
    navigate('meal')
  }

  const variantByPercentage = () => {
    return percentage >= 50 ? 'primary' : 'secondary'
  }

  async function getPercentage() {
    const data = await mealGetStatistics()
    setPercentage(data.percentage)
  }

  async function fetchMeals() {
    try {
      const data = await mealGetAll()
      setCards(data)
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível buscar as refeições')
    }
  }

  const groupedCards: GroupedCards = {}

  cards.forEach(card => {
    const date = formatDate(card.date)

    if (!groupedCards[date]) {
      groupedCards[date] = []
    }

    groupedCards[date].push(card)
  })

  const groupedCardsArray = Object.keys(groupedCards).map(date => {
    return {
      date,
      data: groupedCards[date]
    }
  })

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
      getPercentage()
    }, [])
  )

  return (
    <Layout>
      <Header />

      <Statistics
        onPress={handleNavigateToStatistics}
        icon='arrow-up-right'
        variant={variantByPercentage()}
        size='small'
        percentage={percentage}
      />

      <Content>
        <Title>Refeições</Title>
        <Button text='Nova Refeição' showIcon onPress={handleNavigateToMeal} />

        <FlatList
          style={{ marginBottom: 300 }}
          data={groupedCardsArray}
          keyExtractor={item => item.date}
          renderItem={({ item }) => (
            <>
              <Date>{item.date}</Date>

              {item.data.map((card: Meal) => (
                <Card
                  key={card.id}
                  name={card.name}
                  time={formatTime(card.time)}
                  inDiet={card.diet}
                />
              ))}
            </>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Layout>
  )
}
