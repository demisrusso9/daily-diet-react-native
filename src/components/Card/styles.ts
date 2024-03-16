import styled from 'styled-components/native'

interface DotProps {
  inDiet: boolean
}

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  margin-top: 8px;
  border-radius: 6px;
  flex-direction: row;
  padding: 14px 16px 14px 12px;
  align-items: center;
`

export const Time = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const Bar = styled.Text`
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.gray4};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  flex: 1;
`

export const Diet = styled.View<DotProps>`
  background-color: ${({ theme, inDiet }) => inDiet ? theme.colors.greenMid : theme.colors.redMid};
  width: 14px;
  height: 14px;
  border-radius: 100%;
  margin-left: 24px;
`