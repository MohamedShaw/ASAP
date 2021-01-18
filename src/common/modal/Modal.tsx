// import React, {ReactChildren, ReactNode} from 'react';
// import {KeyboardAvoidingView, StyleSheet} from 'react-native';
// import NativeModal, {ModalProps} from 'react-native-modal';
// import {screenHeight} from '../utils/responsiveDimmensions';

// interface Props extends Partial<ModalProps> {}

// export const AppModal: React.FC<Props> = (props) => {
//   const {
//     useNativeDriver,
//     hideModalContentWhileAnimating,
//     backdropOpacity,
//     deviceHeight,
//     animationIn,
//     animationOut,
//     children,
//     ...rest
//   } = props;

//   return (
//     <NativeModal
//       animationIn={animationIn || 'bounceIn'}
//       animationOut={animationOut || 'bounceOut'}
//       backdropOpacity={backdropOpacity || 0.5}
//       hardwareAccelerated
//       hideModalContentWhileAnimating={true}
//       useNativeDriver={true}
//       deviceHeight={deviceHeight || screenHeight}
//       style={styles.container}
//       {...rest}>
//       <KeyboardAvoidingView
//         style={styles.kyboardView}
//         behavior="padding"
//         enabled>
//         {children}
//       </KeyboardAvoidingView>
//     </NativeModal>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: screenHeight,
//   },
//   kyboardView: {
//     alignSelf: 'stretch',
//     // flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
