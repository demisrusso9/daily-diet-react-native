import { ModalProps } from 'react-native'
import { RNModal } from './styles'

interface Props extends ModalProps {
  isVisible: boolean
  onClose: () => void
}

export function Modal({ isVisible, onClose, children, ...rest }: Props) {
  return (
    <RNModal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      statusBarTranslucent
      onRequestClose={onClose}
      {...rest}
    >
      {children}
    </RNModal>
  )
}
