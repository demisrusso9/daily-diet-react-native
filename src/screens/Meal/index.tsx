import { useState } from 'react'
import { Alert, Keyboard, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { randomUUID } from 'expo-crypto'

import { Statistics } from '@/components/Statistics'
import { Button } from '@/components/Button'
import { ConfirmationButton } from '@/components/ConfirmationButton'

import { mealCreate } from '@/storage/meal/mealCreate'
import { mealEdit } from '@/storage/meal/mealEdit'

import { formatTime } from '@/utils/formatTime'
import { MealType } from '@/@interface/meal'
import {
  Content,
  Form,
  FormColumn,
  FormRow,
  Input,
  Label,
  InputDateAndTime,
  TextDateAndTime
} from './styles'

interface RouteParams {
  card: MealType
  editMode: boolean
}

export function Meal() {
  const route = useRoute()
  const { card, editMode } = route.params as RouteParams
  const { navigate } = useNavigation()

  const [name, setName] = useState((editMode && card.name) || '')
  const [description, setDescription] = useState(
    (editMode && card.description) || ''
  )

  const [focusedButton, setFocusedButton] = useState(
    (editMode && (card.diet ? 'sim' : 'não')) || ''
  )

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false)

  const [datePicker, setDatePicker] = useState<Date | undefined>(
    card?.date ? new Date(card.date) : undefined
  )

  const [timePicker, setTimePicker] = useState<Date | undefined>(
    card?.time ? new Date(card.time) : undefined
  )

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible)
  }

  const toggleTimePicker = () => {
    setTimePickerVisibility(!isTimePickerVisible)
  }

  const handleDateConfirm = (date: Date) => {
    setDatePicker(date)
    toggleDatePicker()
  }

  const handleTimeConfirm = (time: Date) => {
    setTimePicker(time)
    toggleTimePicker()
  }

  function handleNavigateToHome() {
    navigate('home')
  }

  function handleClickSelectedButton(button: string) {
    setFocusedButton(button)
  }

  async function handleSubmit() {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      !datePicker ||
      !timePicker ||
      !focusedButton
    ) {
      return Alert.alert('Preencha todos os campos')
    }

    try {
      const diet = focusedButton === 'sim' ? true : false

      const meal = {
        id: editMode ? card.id : randomUUID(),
        name,
        description,
        date: datePicker.toString(),
        time: timePicker.toString(),
        diet
      }

      if (editMode) {
        await mealEdit(meal)
      } else {
        await mealCreate(meal)
      }

      navigate('dietMessage', { diet })
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
        variant='default'
        text={editMode ? 'Editar refeição' : 'Nova refeição'}
      />

      <Content>
        <Form>
          <FormColumn>
            <Label>Nome</Label>
            <Input
              keyboardAppearance='dark'
              enterKeyHint='done'
              value={name}
              onChangeText={setName}
            />
          </FormColumn>

          <FormColumn>
            <Label>Descrição</Label>
            <Input
              keyboardAppearance='dark'
              enterKeyHint='go'
              expandedView
              multiline
              value={description}
              onChangeText={setDescription}
              blurOnSubmit={true}
              onSubmitEditing={() => {
                Keyboard.dismiss()
              }}
            />
          </FormColumn>

          <FormRow>
            <FormColumn style={{ flex: 1 }}>
              <Label>Data</Label>
              <View>
                <DateTimePicker
                  isVisible={isDatePickerVisible}
                  mode='date'
                  date={datePicker}
                  isDarkModeEnabled={true}
                  onConfirm={handleDateConfirm}
                  onCancel={toggleDatePicker}
                />

                <InputDateAndTime onPress={toggleDatePicker}>
                  <TextDateAndTime>
                    {datePicker && datePicker.toLocaleDateString('pt-BR')}
                  </TextDateAndTime>
                </InputDateAndTime>
              </View>
            </FormColumn>

            <FormColumn style={{ flex: 1 }}>
              <Label>Hora</Label>
              <View>
                <DateTimePicker
                  isVisible={isTimePickerVisible}
                  mode='time'
                  date={timePicker}
                  isDarkModeEnabled={true}
                  onConfirm={handleTimeConfirm}
                  onCancel={toggleTimePicker}
                />

                <InputDateAndTime onPress={toggleTimePicker}>
                  <TextDateAndTime>
                    {timePicker && formatTime(timePicker.toString())}
                  </TextDateAndTime>
                </InputDateAndTime>
              </View>
            </FormColumn>
          </FormRow>

          <FormColumn>
            <Label>Está dentro da dieta?</Label>

            <FormRow>
              <ConfirmationButton
                text='Sim'
                variant={focusedButton === 'sim' ? 'primary' : 'default'}
                onPress={() => handleClickSelectedButton('sim')}
              />

              <ConfirmationButton
                text='Não'
                variant={focusedButton === 'não' ? 'secondary' : 'default'}
                onPress={() => handleClickSelectedButton('não')}
              />
            </FormRow>
          </FormColumn>
        </Form>

        <Button
          style={{ marginBottom: 20 }}
          text={editMode ? 'Salvar alterações' : 'Cadastrar Refeição'}
          onPress={handleSubmit}
        />
      </Content>
    </>
  )
}
