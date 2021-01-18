// import React, {ReactNode, useEffect} from 'react';
// import {SafeAreaView, View, TouchableWithoutFeedback} from 'react-native';
// import {useSelector} from 'react-redux';
// import BottomSheet from 'reanimated-bottom-sheet';
// import {styles} from './style';
// import {RootStore} from 'store';
// import {windowHeight} from 'common/utils/responsiveDimmensions';

// interface Props {
//   isBottomSheetOpen?: boolean;
//   renderContent?: ReactNode;
//   height?: number | string;
//   onClose: () => void;
// }
// export const AppBottomSheet: React.FC<Props> = (props) => {
//   const {
//     renderContent,
//     isBottomSheetOpen,
//     onClose,
//     height = windowHeight / 2,
//   } = props;
//   const {backgroundOverlay, backgroundBottomSheetColor} = useSelector(
//     (state: RootStore) => state.theme.colors,
//   );
//   const sheetRef = React.useRef<BottomSheet>(null);

//   const _close = () => {
//     onClose();
//     sheetRef?.current?.snapTo(0);
//   };

//   const _open = () => {
//     sheetRef?.current?.snapTo(2);
//   };

//   useEffect(() => {
//     if (isBottomSheetOpen) {
//       _open();
//     } else {
//       _close();
//     }
//   }, [isBottomSheetOpen]);

//   return (
//     <>
//       {isBottomSheetOpen && (
//         <View style={[styles.overlay, {backgroundColor: backgroundOverlay}]}>
//           <TouchableWithoutFeedback style={styles.button} onPress={_close}>
//             <View style={styles.button} />
//           </TouchableWithoutFeedback>
//         </View>
//       )}
//       <BottomSheet
//         ref={sheetRef}
//         snapPoints={[0, 0, height]}
//         // borderRadius={10}
//         onCloseEnd={_close}
//         renderContent={() => (
//           <View
//             style={[
//               styles.content,
//               {backgroundColor: backgroundBottomSheetColor, height},
//             ]}>
//             {renderContent}
//             <SafeAreaView />
//           </View>
//         )}
//       />
//     </>
//   );
// };
