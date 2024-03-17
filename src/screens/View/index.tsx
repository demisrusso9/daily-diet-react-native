import { Statistics } from '@/components/Statistics'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Content,
  Name,
  Description,
  Text,
  DateAndTime,
  Division,
  TagView,
  TagText,
  Tag,
  ModalView,
  ModalBox,
  ModalText,
  ButtonsView
} from './styles'
import { Meal } from '@/storage/meal/mealCreate'
import { Button } from '@/components/Button'
import { formatDate } from '@/utils/formatDate'
import { formatTime } from '@/utils/formatTime'
import { mealDelete } from '@/storage/meal/mealDelete'
import { Modal } from '@/components/Modal'
import { useState } from 'react'
import { View as RNView } from 'react-native'

interface RouteParams {
  card: Meal
}

export function View() {
  const route = useRoute()
  const { card } = route.params as RouteParams
  const { navigate } = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)

  function handleNavigateToHome() {
    navigate('home')
  }

  function toggleModal() {
    setModalVisible(!modalVisible)
  }

  async function handleRemoveMeal(id: string) {
    try {
      await mealDelete(id)
      handleNavigateToHome()
      toggleModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Statistics
        onPress={handleNavigateToHome}
        icon='arrow-left'
        size='medium'
        variant={card.diet ? 'primary' : 'secondary'}
      />

      <Content>
        <Division>
          <Name>{card.name}</Name>
          <Description>{card.description}</Description>
          <Text>Data e hora</Text>

          <DateAndTime>
            {formatDate({ date: card.date, dotFormat: false })} às
            {formatTime(card.time)}
          </DateAndTime>

          <TagView inDiet={card.diet}>
            <Tag inDiet={card.diet} />
            <TagText>{card.diet ? 'dentro da dieta' : 'fora da dieta'}</TagText>
          </TagView>
        </Division>

        <Button text='Editar refeição' icon='pencil' />
        <Button
          text='Excluir refeição'
          icon='trash'
          transparent
          onPress={toggleModal}
        />
      </Content>

      <Modal isVisible={modalVisible} onClose={toggleModal}>
        <ModalView>
          <ModalBox>
            <ModalText>
              Deseja realmente excluir o registro da refeição?
            </ModalText>

            <ButtonsView>
              <Button
                style={{ flex: 1 }}
                text='Cancelar'
                onPress={toggleModal}
                transparent
              />
              <Button
                style={{ flex: 1 }}
                text='Sim, excluir'
                onPress={() => handleRemoveMeal(card.id)}
              />
            </ButtonsView>
          </ModalBox>
        </ModalView>
      </Modal>
    </>
  )
}
