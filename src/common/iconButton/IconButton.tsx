import {AppIcon, Props as IconProps} from '../icon/Icon';
import React from 'react';
import {StyleSheet, ViewStyle, View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {styles} from './styles';

interface Props extends IconProps {
  containerStyle?: ViewStyle;
  onPress?: () => void;
  enabled?: boolean;
}

export const AppIconButton = (props: Props) => {
  const {onPress, containerStyle, enabled = true, size, ...rest} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <BorderlessButton
        style={[styles.content]}
        enabled={enabled}
        onPress={onPress}>
        <AppIcon size={size} {...rest} />
      </BorderlessButton>
    </View>
  );
};
