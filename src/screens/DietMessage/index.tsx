import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '@/components/Button'
import { Content, Title, Subtitle, Image, Bold } from './styles'
import { Layout } from '@/layout'

import onDietImage from '@/assets/on-diet.png'
import offDietImage from '@/assets/off-diet.png'

type RouteParams = {
  diet: boolean
}

export function DietMessage() {
  const route = useRoute()
  const { diet } = route.params as RouteParams

  const { navigate } = useNavigation()

  function navigateToHome() {
    navigate('home')
  }

  return (
    <Layout>
      <Content>
        <Title diet={diet}>{diet ? 'Continue assim!' : 'Que pena!'}</Title>
        <Subtitle>
          {diet ? (
            <>
              Você continua
              <Bold> dentro da dieta</Bold>. Muito bem!
            </>
          ) : (
            <>
              Você
              <Bold> saiu da dieta </Bold>
              dessa vez, mas continue se esforçando e não desista!
            </>
          )}
        </Subtitle>

        <Image source={diet ? onDietImage : offDietImage} />

        <Button
          style={{ paddingLeft: 24, paddingRight: 24 }}
          text='Ir para a página inicial'
          onPress={navigateToHome}
        />
      </Content>
    </Layout>
  )
}
