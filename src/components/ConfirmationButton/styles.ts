import styled from 'styled-components/native'
import DotOutline from 'phosphor-react-native/src/icons/DotOutline'

export interface ContainerProps {
  variant: 'default' | 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 50px;
  flex: 1;
  flex-direction: row;
  border-radius: 6px;
  
  color: ${({ theme }) => theme.colors.gray1};
  
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'default':
        return theme.colors.gray6;
      case 'primary':
        return theme.colors.greenLight;
      case 'secondary':
        return theme.colors.redLight;
    }
  }};

  border: 1px solid ${({ theme, variant }) => {
    switch (variant) {
      case 'default':
        return theme.colors.gray6;
      case 'primary':
        return theme.colors.greenDark;
      case 'secondary':
        return theme.colors.redDark;
    }
  }};
`

export const IconDot = styled(DotOutline).attrs<ContainerProps>(({ theme, variant }) => {
  let color;

  switch (variant) {
    case 'primary':
      color = theme.colors.greenDark;
      break;
    case 'secondary':
      color = theme.colors.redDark;
      break;
  }

  return {
    size: theme.fontSize.xl,
    color,
    weight: 'fill',
  }
})`
  margin-right: -4px;
`