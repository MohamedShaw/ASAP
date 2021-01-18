import {AppImage} from '../image/Image';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './style';
import {RootStore} from 'store';
import {AppIconButton} from '../iconButton/IconButton';
import {IconType} from '../utils/icon';

const person = require('assets/img/person.png');

interface Props {
  size?: number;
  name?: string;
  type?: IconType;
  onPress?: () => void;
}

export const AvatarIcon: React.FC<Props> = (props) => {
  const {size = 30, name, type, onPress} = props;
  const {primary, backgroundColor} = useSelector(
    (state: RootStore) => state.theme.colors,
  );

  return (
    <View
      style={[
        styles.iconContainer,
        {
          backgroundColor,
          borderRadius: size / 2,
          width: size,
          height: size,
        },
      ]}>
      <AppIconButton
        onPress={onPress}
        containerStyle={{
          backgroundColor: primary,
          borderRadius: size / 2 - 3,
          width: size - 6,
          height: size - 6,
        }}
        color={backgroundColor}
        size={(size - 3) / 2}
        name={name || 'plus'}
        type={type || IconType.foundation}
      />
    </View>
  );
};
