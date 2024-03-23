import styled from 'styled-components/native'
import Plus from 'phosphor-react-native/src/icons/Plus'
import Trash from 'phosphor-react-native/src/icons/Trash'
import PencilSimpleLine from 'phosphor-react-native/src/icons/PencilSimpleLine'
import { ComponentType } from 'react'
import theme from '@/theme'
import { IconProps } from 'phosphor-react-native/src/lib'

interface ButtonColor extends IconProps {
  theme: typeof theme
  transparent?: boolean
}

const createIcon = (IconComponent: ComponentType<ButtonColor>) => {
  return styled(IconComponent).attrs(({ theme, transparent }) => ({
    size: theme.fontSize.lg,
    color: transparent ? theme.colors.gray1 : theme.colors.white,
    theme
  }))`
    height: 18px;
    width: 18px;
    margin-right: 12px;
  `
}

export const Container = styled.TouchableOpacity<ButtonColor>`
  height: 50px;
  background-color: ${({ theme, transparent }) => transparent ? 'transparent' : theme.colors.gray2};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-width: ${({ transparent }) => transparent ? 1 : 0}px;
`

export const Title = styled.Text<ButtonColor>`
  color: ${({ theme, transparent }) => transparent ? theme.colors.gray1 : theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const IconPlus = createIcon(Plus);
export const IconTrash = createIcon(Trash);
export const IconPencilSimpleLine = createIcon(PencilSimpleLine);