import { Container, Logo, Profile, ProfilePhoto } from './styles'

import logoImg from '@/assets/logo.png'
import profile from '@/assets/photo.jpeg'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />

      <Profile>
        <ProfilePhoto source={profile} />
      </Profile>
    </Container>
  )
}
