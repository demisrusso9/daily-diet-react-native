import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.greenLight};
  width: 100%;
  `

export const Content = styled.View`
  padding: 24px;
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.gray7};
  border-radius: 20px;
  margin-top: -35px;
  align-items: center;
  gap: 16px;
`

export const Text = styled.Text`
  margin: 12px 0;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const RowCards = styled.View`
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  gap: 16px;
  width: 48%;
  justify-content: center;

`