import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Content = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    gap: 16,
    paddingBottom: 80,
  }
}))`
  padding: 24px;
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.gray7};
  border-radius: 20px;
  margin-top: -35px;
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