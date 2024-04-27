import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '@/components/Button'
import { Content, Title, Subtitle, Image, Bold } from './styles'
import { Layout } from '@/layout'

import onDietImage from '@/assets/on-diet.png'
import offDietImage from '@/assets/off-diet.png'

type RouteParams = {
  status: boolean
}

export function DietStatusMessage() {
  const route = useRoute()
  const { status } = route.params as RouteParams

  const { navigate } = useNavigation()

  function navigateToHome() {
    navigate('home')
  }

  return (
    <Layout>
      <Content>
        <Title diet={status}>{status ? 'Continue assim!' : 'Que pena!'}</Title>
        <Subtitle>
          {status ? (
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

        <Image source={status ? onDietImage : offDietImage} />

        <Button
          style={{ paddingLeft: 24, paddingRight: 24 }}
          text='Ir para a página inicial'
          onPress={navigateToHome}
        />
      </Content>
    </Layout>
  )
}
