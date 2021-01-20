import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import NativeModal, {ModalProps} from 'react-native-modal';
import {screenHeight} from '../utils/responsiveDimmensions';
import {styles} from './style';

interface Props extends Partial<ModalProps> {}

export const AppModal: React.FC<Props> = (props) => {
  const {
    useNativeDriver,
    hideModalContentWhileAnimating,
    backdropOpacity,
    deviceHeight,
    animationIn,
    animationOut,
    children,
    ...rest
  } = props;

  return (
    <NativeModal
      animationIn={animationIn || 'bounceIn'}
      animationOut={animationOut || 'bounceOut'}
      backdropOpacity={backdropOpacity || 0.5}
      hardwareAccelerated
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      deviceHeight={deviceHeight || screenHeight}
      style={styles.container}
      {...rest}>
      <KeyboardAvoidingView
        style={styles.kyboardView}
        behavior="padding"
        enabled>
        {children}
      </KeyboardAvoidingView>
    </NativeModal>
  );
};
