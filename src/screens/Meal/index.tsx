import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Statistics } from '@/components/Statistics'
import { Button } from '@/components/Button'
import { ConfirmationButton } from '@/components/ConfirmationButton'
import { mealCreate } from '@/storage/meal/mealCreate'
import { randomUUID } from 'expo-crypto'
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
import { View } from 'react-native'
import { formatTime } from '@/utils/formatTime'
import DateTimePicker from 'react-native-modal-datetime-picker'

export function Meal() {
  const { navigate } = useNavigation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const [focusedButton, setFocusedButton] = useState('')

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
  const [datePicker, setDatePicker] = useState<Date>()
  const [timePicker, setTimePicker] = useState<Date>()

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
    try {
      const diet = focusedButton === 'sim' ? true : false

      const meal = {
        id: randomUUID(),
        name,
        description,
        date,
        time,
        diet
      }

      await mealCreate(meal)

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
              enterKeyHint='done'
              expandedView
              value={description}
              onChangeText={setDescription}
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
                    {timePicker && formatTime(timePicker)}
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

        <Button text='Cadastrar Refeição' onPress={handleSubmit} />
      </Content>
    </>
  )
}
