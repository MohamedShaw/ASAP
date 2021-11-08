import React, {forwardRef, ReactNode, useState} from 'react';
import {
  TextInputProps,
  TextInput,
  View,
  ViewStyle,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {AppText} from 'common/text/Text';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {styles} from './style';
import {InnerNeomorphContainer} from '../innerNeomorphContainer/InnerNeomorphContainer';
import {AppIconButton} from 'common/iconButton/IconButton';
import {CustomTextStyle} from 'common/text/Text';
import I18n from 'react-native-i18n';
import {Lang} from 'translation';
import {convertNumbers2English} from 'utils';
interface Props extends Omit<TextInputProps, 'style'> {
  label?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  style?: StyleProp<CustomTextStyle>;
  error?: string;
  value?: string;
  noValidation?: boolean;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  inputHeight?: number;
  // touched?: boolean;
}

export const AppInput = forwardRef<TextInput, Props>((props, ref) => {
  const {
    label,
    leftItem,
    rightItem,
    containerStyle,
    style,
    error,
    noValidation,
    secureTextEntry,
    onBlur,
    onFocus,
    multiline,
    onChangeText,
    keyboardType,
    ...rest
  } = props;

  const {
    colors: {
      primary,
      textColor,
      textHintColor,
      errorTextColor,
      placeHolderColor,
      iconColor,
    },
    fonts,
  } = useSelector((state: RootStore) => state.theme);
  const numbersKeybourdsTypes: (string | undefined)[] = [
    'decimal-pad',
    'number-pad',
    'phone-pad',
    'numeric',
  ];
  const [isFocus, setIsFocus] = useState(false);
  const [isPasswordHidden, hiddenPassword] = useState(secureTextEntry);
  const [convertNumbersFlag, setConvertNumbersFlag] = useState<boolean>(
    numbersKeybourdsTypes?.includes(keyboardType),
  );

  const fontFamily =
    fonts[StyleSheet.flatten<CustomTextStyle>(style)?.fontWeight || 'Regular'];
  const styleWithOutFontWeight: Omit<
    CustomTextStyle,
    'fontWeight'
  > = StyleSheet.flatten<CustomTextStyle>(style);

  const writingDirection = I18n.locale == Lang.ar ? 'rtl' : 'ltr';
  const textAlign = I18n.locale == Lang.ar ? 'right' : 'left';

  const height =
    StyleSheet.flatten<ViewStyle>(containerStyle)?.height ||
    (multiline ? 112 : 58);

  const _onChangeText = (text) =>
    (onChangeText as Function)(convertNumbers2English(text));

  const _onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(true);
    if (onFocus) onFocus(event);
  };

  const _onBlure = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(false);
    if (onBlur) onBlur(event);
  };

  let labelTextColor = textColor;
  let inputTextColor = textHintColor;
  let _iconColor = iconColor;

  if (isFocus) {
    labelTextColor = primary;
    inputTextColor = textColor;
    _iconColor = primary;
  }

  if (error) {
    labelTextColor = errorTextColor;
  }

  return (
    <View style={containerStyle}>
      <InnerNeomorphContainer
        style={{
          height,
          alignSelf: 'stretch',
        }}>
        <View style={styles.container}>
          {leftItem}
          <View style={styles.content}>
            {!!label && (
              <AppText
                style={[
                  styles.label,
                  {fontWeight: 'Medium', color: labelTextColor},
                ]}>
                {label}
              </AppText>
            )}
            <TextInput
              ref={ref}
              multiline={multiline}
              secureTextEntry={isPasswordHidden}
              placeholderTextColor={placeHolderColor}
              onFocus={_onFocus}
              onBlur={_onBlure}
              style={[
                styles.input,
                {
                  color: inputTextColor,
                  textAlign,
                  writingDirection,
                  textAlignVertical: multiline ? 'top' : 'center',
                },
                styleWithOutFontWeight,
                {
                  fontFamily,
                  height: multiline ? 70 : 20,
                },
              ]}
              onChangeText={convertNumbersFlag ? _onChangeText : onChangeText}
              keyboardType={keyboardType}
              {...rest}
            />
          </View>
          {secureTextEntry && (
            <AppIconButton
              // enabled={!!props.value && props.value.length > 0}
              color={_iconColor}
              onPress={() => hiddenPassword(!isPasswordHidden)}
              containerStyle={styles.show_password_icon}
              size={28}
              // type={IconType.ionicons}
              name={isPasswordHidden ? 'eye-disable' : 'eye-able'}
            />
          )}
          {rightItem}
        </View>
      </InnerNeomorphContainer>
      {!noValidation && (
        <AppText style={[styles.error, {color: errorTextColor}]}>
          {error}
        </AppText>
      )}
    </View>
  );
});
