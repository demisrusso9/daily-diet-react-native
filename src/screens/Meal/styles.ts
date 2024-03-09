import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Content = styled.View`
  padding: 24px;
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.gray7};
  border-radius: 20px;
  margin-top: -10px;
  align-items: center;
  gap: 16px;
`