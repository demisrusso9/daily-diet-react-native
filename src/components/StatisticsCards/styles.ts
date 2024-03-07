import styled from 'styled-components/native'

export interface CardsProps {
  variant?: 'default' | 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<CardsProps>`
  height: ${({ variant }) => (variant === 'default' ? '89px' : '107px')};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'default':
        return theme.colors.gray6;
      case 'primary':
        return theme.colors.greenLight;
      case 'secondary':
        return theme.colors.redLight;
      default:
        return theme.colors.gray6;
    }
  }};

  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
`

export const Number = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  text-align: center;
`