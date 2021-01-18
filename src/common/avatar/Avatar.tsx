import {AppImage} from '../image/Image';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './style';
import {RootStore} from 'store';
import {AppIconButton} from '../iconButton/IconButton';
import {IconType} from '../utils/icon';
import {AvatarIcon} from './AvatarIcon';
import {RectButton} from 'react-native-gesture-handler';
import {Source} from 'react-native-fast-image';

const person = require('assets/img/person.png');

interface Props extends ViewProps {
  size?: number;
  editable?: boolean;
  onPress?: () => void;
  source?: Source | null;
}

export const AppAvatar: React.FC<Props> = (props) => {
  const {size = 85, onPress, editable, source, style, ...rest} = props;
  const {imgBackgroundColor} = useSelector(
    (state: RootStore) => state.theme.colors,
  );
  const {backgroundColor = imgBackgroundColor} =
    StyleSheet.flatten(style) || {};

  return (
    <RectButton
      onPress={onPress}
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: source ? '' : backgroundColor,
        },
        style,
      ]}
      {...rest}>
      <AppImage
        source={source || person}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
        resizeMode="cover"
      />
      {editable && (
        <AvatarIcon
          name={source ? 'photo-camera' : undefined}
          type={source ? IconType.materialIcons : undefined}
          onPress={onPress}
        />
      )}
    </RectButton>
  );
};
