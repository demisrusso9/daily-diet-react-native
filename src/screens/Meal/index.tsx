import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Statistics } from '@/components/Statistics'
import { Button } from '@/components/Button'
import { ConfirmationButton } from '@/components/ConfirmationButton'
import { mealCreate } from '@/storage/meal/mealCreate'
import { randomUUID } from 'expo-crypto'
import { Content, Form, FormColumn, FormRow, Input, Label } from './styles'

export function Meal() {
  const { navigate } = useNavigation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const [focusedButton, setFocusedButton] = useState<null | string>(null)

  function handleNavigateToHome() {
    navigate('home')
  }

  function handleClickSelectedButton(button: string) {
    setFocusedButton(button)
  }

  async function handleSubmit() {
    try {
      const meal = {
        id: randomUUID(),
        name,
        description,
        date,
        time,
        diet: focusedButton
      }

      await mealCreate(meal)
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
              <Input
                keyboardAppearance='dark'
                enterKeyHint='done'
                keyboardType='decimal-pad'
                value={date}
                onChangeText={setDate}
              />
            </FormColumn>

            <FormColumn style={{ flex: 1 }}>
              <Label>Hora</Label>
              <Input
                keyboardAppearance='dark'
                enterKeyHint='done'
                keyboardType='decimal-pad'
                value={time}
                onChangeText={setTime}
              />
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
