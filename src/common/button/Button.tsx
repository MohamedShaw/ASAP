import React, {ReactNode} from 'react';
import {ViewStyle, View, StyleProp} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {styles} from './styles';
import {AppText, CustomTextStyle} from '../text/Text';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {AppSpinner} from '../spinner/spinner';

interface Props {
  title?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  processing?: boolean;
  textStyle?: StyleProp<CustomTextStyle>;
  spinnerColor?: string;
  enabled?: boolean;
}

export const AppButton = (props: Props) => {
  const {
    onPress,
    processing,
    leftItem,
    rightItem,
    style,
    textStyle,
    title,
    spinnerColor = 'white',
    enabled = true,
  } = props;
  const {
    colors: {primary, titleColor, buttonTextColor,  darkShadowColor },
  } = useSelector((state: RootStore) => state.theme);

  return (
    <RectButton
      style={[styles.container, {backgroundColor: enabled ? primary :  darkShadowColor}, style]}
      enabled={enabled && !processing}
      onPress={onPress}>
      {processing ? (
        <AppSpinner style={styles.spinner} color={spinnerColor} size={35} />
      ) : (
        <View style={styles.content}>
          {leftItem}
          <View style={styles.text_container}>
            <AppText
              style={[
                styles.text,
                {
                  color: enabled ? buttonTextColor : titleColor,
                  fontWeight: 'SemiBold',
                },
                textStyle,
              ]}>
              {title}
            </AppText>
          </View>
          {rightItem}
        </View>
      )}
    </RectButton>
  );
};
