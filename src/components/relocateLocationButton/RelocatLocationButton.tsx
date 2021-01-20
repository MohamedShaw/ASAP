import {AppIconButton, IconType} from 'common';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'slices';
import {styles} from './styles';
interface Props {
  onRelocateLocation: () => void;
}
const RelocateLocationButton: FC<Props> = ({onRelocateLocation}) => {
  const {
    colors: {primary, buttonTextColor},
  } = useTheme();
  return (
    <View style={[styles.myLocationContainer, {backgroundColor: primary}]}>
      <AppIconButton
        onPress={() => onRelocateLocation()}
        type={IconType.materialIcons}
        name="my-location"
        size={25}
        color={buttonTextColor}
      />
    </View>
  );
};

export {RelocateLocationButton};
