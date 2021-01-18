import React from 'react';
import {StyleProp, Text, TextProps, TextStyle, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {styles} from './style';
import {LIGHT_FONTS} from '../Theme/font/light';

export interface CustomTextStyle extends Omit<TextStyle, 'fontWeight'> {
  fontWeight?: keyof typeof LIGHT_FONTS;
}

interface Props extends Omit<TextProps, 'style'> {
  style?: StyleProp<CustomTextStyle>;
}

export const AppText: React.FC<Props> = (props) => {
  const {children, style, ...rest} = props;
  const {
    colors: {textColor},
    fonts,
  } = useSelector((state: RootStore) => state.theme);

  const fontFamily =
    fonts[StyleSheet.flatten<CustomTextStyle>(style)?.fontWeight || 'Regular'];

  return (
    <Text
      {...rest}
      style={[
        styles.text,
        {color: textColor},
        style,
        {fontFamily, fontWeight: undefined},
      ]}>
      {children}
    </Text>
  );
};
