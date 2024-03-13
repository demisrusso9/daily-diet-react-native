import styled from 'styled-components/native'

interface ColorProps {
  diet: boolean;
}

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text<ColorProps>`
  color: ${({ theme, diet }) => diet ? theme.colors.greenDark : theme.colors.redDark};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  text-align: center;
  margin-bottom: 8px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  text-align: center;
`

export const Image = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
`