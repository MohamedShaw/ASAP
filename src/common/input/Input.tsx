import React, {forwardRef, ReactNode, useState, useEffect} from 'react';
import {
  TextInputProps,
  PixelRatio,
  TextInput,
  View,
  ViewStyle,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Animated,
} from 'react-native';
import {AppText} from '../text/Text';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {styles} from './style';
import {InnerNeomorphContainer} from '../innerNeomorphContainer/InnerNeomorphContainer';
import {IconType} from '../utils/icon';
import {AppIconButton} from '../iconButton/IconButton';
import {CustomTextStyle} from '../text/Text';

interface Props extends Omit<TextInputProps, 'style'> {
  label?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  style?: StyleProp<CustomTextStyle>;
  error?: string;
  value: string;
  noValidation?: boolean;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  inputHeight?: number;
  // touched?: boolean;
  initialValue?: String;
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
    initialValue,
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

  const [isFocus, setIsFocus] = useState(false);
  const [isPasswordHidden, hiddenPassword] = useState(secureTextEntry);
  let _animatedIsFocused = new Animated.Value(initialValue ? 1 : 0);

  const fontFamily =
    fonts[StyleSheet.flatten<CustomTextStyle>(style)?.fontWeight || 'Regular'];
  const styleWithOutFontWeight: Omit<
    CustomTextStyle,
    'fontWeight'
  > = StyleSheet.flatten<CustomTextStyle>(style);

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
  console.log('props.initialValue -- ', props.initialValue?.toString());

  useEffect(() => {
    Animated.timing(_animatedIsFocused, {
      toValue: isFocus || initialValue !== '' ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  });
  const labelStyle = [
    {
      position: 'absolute',
      top: 24,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 25,
      transform: [
        {
          translateY: _animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -35],
          }),
        },
        {
          scale: _animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.9],
          }),
        },
      ],
    },
  ];

  return (
    <View style={containerStyle}>
      <View
        style={{
          height: multiline ? 112 : 58,
          alignSelf: 'stretch',
        }}>
        <View style={styles.container}>
          {leftItem}
          <View style={styles.content}>
            {!!label && (
              <Animated.View pointerEvents="none" style={labelStyle}>
                <View
                  style={{
                    backgroundColor: 'white',
                    alignSelf: 'stretch',
                    paddingHorizontal: 20,
                  }}>
                  <AppText>{label}</AppText>
                </View>
              </Animated.View>
              // <AppText style={[styles.label, {color: labelTextColor}]}>
              //   {label}
              // </AppText>
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
                {color: inputTextColor},
                styleWithOutFontWeight,
                {
                  fontFamily,
                  height: multiline ? 70 : 20,
                },
              ]}
              {...rest}
            />
          </View>
          {secureTextEntry && (
            <AppIconButton
              enabled={props.value.length > 0}
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
      </View>
      {!noValidation && (
        <AppText style={[styles.error, {color: errorTextColor}]}>
          {error}
        </AppText>
      )}
    </View>
  );
});
