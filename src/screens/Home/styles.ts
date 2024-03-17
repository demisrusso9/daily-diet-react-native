import styled from 'styled-components/native'

export const Content = styled.View`
    
`

export const Title = styled.Text`
  margin: 40px 0 8px;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`

export const TextDate = styled.Text`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.ml}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`