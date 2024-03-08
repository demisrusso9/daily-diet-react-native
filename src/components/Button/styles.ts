import styled from 'styled-components/native'
import Plus from 'phosphor-react-native/src/icons/Plus'

export const Container = styled.TouchableOpacity`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const IconPLus = styled(Plus).attrs(({ theme }) => ({
  size: theme.fontSize.lg,
  color: theme.colors.white,
}))`
  height: 18px;
  width: 18px;
  margin-right: 12px;
`