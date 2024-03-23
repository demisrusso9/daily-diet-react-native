import styled from 'styled-components/native'

interface DotProps {
  inDiet: boolean
}


export const Content = styled.View`
  padding: 24px;
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.gray7};
  border-radius: 20px;
  margin-top: -20px;
  gap: 16px;
`

export const Division = styled.View`
  flex: 1;
`

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  margin-bottom: 8px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  margin-bottom: 16px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  margin-bottom: 4px;
`

export const DateAndTime = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  margin-bottom: 24px;
`

export const TagView = styled.View<DotProps>`
  height: 34px;
  background-color: ${({ theme }) => theme.colors.gray6};
  border-radius: 50px;
  padding: 8px 16px;
  flex-direction: row;

  align-items: center;
  align-self: self-start;
`

export const TagText = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`

export const Tag = styled.View<DotProps>`
  height: 8px;
  width: 8px;
  background-color: ${({ theme, inDiet }) => inDiet ? theme.colors.greenDark : theme.colors.redDark};
  border-radius: 50px;
  margin-right: 8px;
`

export const ModalView = styled.View`
  background-color: rgba(0, 0, 0, 0.25);
  justify-items: center;
  justify-content: center;
  flex: 1;
  padding: 24px;
`

export const ModalBox = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
`

export const ModalText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.ml}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  margin-bottom: 24px;
`

export const ButtonsView = styled.View`
  flex-direction: row;
  gap: 12px;
`