import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { Statistics } from '@/components/Statistics'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Layout } from '@/layout'

import { mealGetAll } from '@/storage/meal/mealGetAll'
import { formatTime } from '@/utils/formatTime'
import { formatDate } from '@/utils/formatDate'
import { MealType } from '@/@interface/meal'

import { Content, TextDate, Title } from './styles'
import { useDiet } from '@/hooks/useDiet'

interface GroupedCards {
  [key: string]: MealType[]
}

export function Home() {
  const {
    cards,
    statistics,
    variantByPercentage,
    fetchStatistics,
    fetchMeals
  } = useDiet()
  
  const { navigate } = useNavigation()

  function handleNavigateToStatistics() {
    navigate('stats')
  }

  function handleNavigateToMeal() {
    navigate('meal', {})
  }

  function handleNavigateToViewPage(card: MealType) {
    navigate('view', { card })
  }

  const groupedCards: GroupedCards = {}

  cards.forEach(card => {
    const date = formatDate({ date: card.date, dotFormat: true })

    if (!groupedCards[date]) {
      groupedCards[date] = []
    }

    groupedCards[date].push(card)
  })

  const groupedCardsArray = Object.keys(groupedCards)
    .map(date => {
      return {
        date,
        data: groupedCards[date]
      }
    })
    .sort((a, b) => {
      const datePartsA = a.date.split('.').reverse()
      const datePartsB = b.date.split('.').reverse()

      const dateA = new Date(datePartsA.join('-'))
      const dateB = new Date(datePartsB.join('-'))

      return dateB.getTime() - dateA.getTime()
    })

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
      fetchStatistics()
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
        percentage={statistics.percentage}
      />

      <Content>
        <Title>Refeições</Title>
        <Button
          text='Nova Refeição'
          icon='plus'
          onPress={handleNavigateToMeal}
        />

        <FlatList
          style={{ marginBottom: 300 }}
          data={groupedCardsArray}
          keyExtractor={item => item.date}
          renderItem={({ item }) => (
            <>
              <TextDate>{item.date}</TextDate>

              {item.data.map((card: MealType) => (
                <Card
                  onPress={() => handleNavigateToViewPage(card)}
                  key={card.id}
                  name={card.name}
                  time={formatTime(card.time)}
                  inDiet={card.status}
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
