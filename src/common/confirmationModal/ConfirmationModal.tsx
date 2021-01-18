// import React from 'react';
// import {AppText} from '../text/Text';
// import {AppModal} from '../modal/Modal';
// import {StyleSheet, View} from 'react-native';
// import {AppTextButton} from '../textButton/TextButton';

// interface Props {
//   title: string;
//   desc: string;
//   isVisible: boolean;
//   closable?: boolean;
//   onConfirm: () => void;
//   onClose: () => void;
// }

// const AppConfirmationModal: React.FC<Props> = (props) => {
//   const {closable, desc, title, isVisible, onConfirm, onClose} = props;
//   return (
//     <AppModal
//       onBackButtonPress={onClose}
//       onBackdropPress={closable ? onClose : () => {}}
//       isVisible={isVisible}>
//       <View style={styles.container}>
//         <View style={styles.body}>
//           <AppText style={{color: 'gray', fontWeight: 'Bold'}}>{title}</AppText>
//           <AppText style={{color: 'gray', marginVertical: 10}}>{desc}</AppText>
//         </View>
//         <View style={styles.actions}>
//           <AppTextButton onPress={onConfirm} title="ok" />
//           <AppTextButton
//             onPress={onClose}
//             style={{marginLeft: 10}}
//             title="cancel"
//           />
//         </View>
//       </View>
//     </AppModal>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     height: 170,
//     backgroundColor: 'white',
//     alignSelf: 'stretch',
//     borderRadius: 4,
//     paddingHorizontal: 20,
//     paddingBottom: 10,
//     paddingTop: 20,
//   },
//   body: {
//     flex: 1,
//     alignSelf: 'stretch',
//   },
//   actions: {
//     flexDirection: 'row',
//     alignSelf: 'flex-end',
//   },
// });

// AppConfirmationModal.defaultProps = {closable: true};

// export {AppConfirmationModal};
