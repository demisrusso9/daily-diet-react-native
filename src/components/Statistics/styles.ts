import styled, { NativeTarget } from 'styled-components/native'
import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import { IconProps } from 'phosphor-react-native'
import theme from '@/theme'

export interface IconButtonProps {
  icon: 'arrow-left' | 'arrow-up-right'
}

export interface ContainerProps {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const createIconComponent = (Icon: NativeTarget) => {
  return styled(Icon).attrs<ContainerProps>(({ theme, variant }) => {
    let color;

    switch (variant) {
      case 'default':
        color = theme.colors.gray2;
        break;
      case 'primary':
        color = theme.colors.greenDark;
        break;
      case 'secondary':
        color = theme.colors.redDark;
        break;
    }

    return {
      color,
      size: theme.fontSize.lg,
    }
  });
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: relative;

  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return 102;
      case 'medium':
        return 132;
      case 'large':
        return 200;
    }
  }}px;
  
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'default':
        return theme.colors.gray5;
      case 'primary':
        return theme.colors.greenLight;
      case 'secondary':
        return theme.colors.redLight;
    }
  }};
`

export const ButtonIcon = styled.TouchableOpacity<IconButtonProps & ContainerProps>`
  position: absolute;
  align-items: ${({ icon }) => (icon === 'arrow-up-right' ? 'flex-end' : 'flex-start')};
  width: 100%;
  top: ${({ size }) => (size === 'small' ? 10 : 65)}px;
`

export const IconArrowUpRight = createIconComponent(ArrowUpRight)`
  right: 10px;
`

export const IconArrowLeft = createIconComponent(ArrowLeft)`
  left: 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.ml}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  margin-top: 25px;
`

export const Percentage = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`

