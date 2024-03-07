import styled from 'styled-components/native'
import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'

export interface IconButtonProps {
  icon: 'arrow-left' | 'arrow-up-right'
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.greenLight};
  height: 102px;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const ButtonIcon = styled.TouchableOpacity<IconButtonProps>`
  position: absolute;
  align-items: ${({ icon }) => (icon === 'arrow-up-right' ? 'flex-end' : 'flex-start')};
  width: 100%;
  top: 10px;
`

export const IconArrowUpRight = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: theme.fontSize.lg,
  color: theme.colors.greenDark,
}))`
  right: 10px;
`

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.fontSize.lg,
  color: theme.colors.greenDark,
}))`
  left: 20px;
`

export const Percentage = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`

