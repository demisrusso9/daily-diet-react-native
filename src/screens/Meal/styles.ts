import styled from 'styled-components/native'

interface InputProps {
  expandedView?: boolean;
  isFocused?: boolean;
}

export const Content = styled.View`
  padding: 24px;
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.gray7};
  border-radius: 20px;
  margin-top: -20px;
  gap: 16px;
`

export const Form = styled.View`
  flex: 1;
`

export const FormColumn = styled.View`
  margin-bottom: 24px;
`

export const FormRow = styled.View`
  flex-direction: row;
  gap: 16px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  margin-bottom: 6px;
`

export const Input = styled.TextInput<InputProps>`
  height: ${({ expandedView }) => expandedView ? 120 : 48}px;
  border: 1px solid ${({ theme, isFocused }) => isFocused ? theme.colors.gray1 : theme.colors.gray5};
  border-radius: 6px;
  padding: 24px;
  padding-top: ${({ expandedView }) => expandedView ? 24 : 0}px;
  padding-bottom: ${({ expandedView }) => expandedView ? 24 : 0}px;
  line-height: 20px;
`

export const InputDateAndTime = styled.TouchableOpacity<InputProps>`
  height: 48px;
  border: 1px solid ${({ theme, isFocused }) => isFocused ? theme.colors.gray1 : theme.colors.gray5};
  border-radius: 6px;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`

export const TextDateAndTime = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`