import React, {
  forwardRef,
  ReactNode,
  useState,
  useEffect,
  PureComponent,
} from 'react';
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
import {useSelector, connect} from 'react-redux';
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

class Input extends PureComponent {
  state: {
    secure: any;
    color: any;
    isFocus: boolean;
    convertNumbersFlag: boolean;
    isPasswordHidden: boolean;
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      secure: props.secure,
      color: props.color || props.inactiveColor,
      isFocus: false,
      convertNumbersFlag: this.props.phone || this.props.number ? true : false,
      isPasswordHidden: false,
    };
    this._animatedIsFocused = new Animated.Value(props.initialValue ? 1 : 0);
  }

  onFocusInput = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    console.log('onFocusInput');

    const {onFocus} = this.props;
    this.setState({
      isFocus: true,
    });
    if (onFocus) onFocus(event);
  };

  onBlureInput = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const {onBlur} = this.props;

    this.setState({
      isFocus: false,
    });
    if (onBlur) onBlur(event);
  };

  componentWillReceiveProps(nextProps) {
    // if (nextProps.reset !== this.props.reset) {
    //   this.clear();
    // }
  }

  componentDidUpdate() {
    console.log('update');

    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocus || this.props.initialValue !== '' ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }

  render() {
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
      styleWithOutFontWeight,
      theme,
      ...rest
    } = this.props;

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
    } = theme;
    let labelTextColor = textColor;
    let inputTextColor = textHintColor;
    let _iconColor = iconColor;

    if (this.state.isFocus) {
      labelTextColor = primary;
      inputTextColor = textColor;
      _iconColor = primary;
    }

    if (error) {
      labelTextColor = errorTextColor;
    }
    const labelStyle = [
      {
        position: 'absolute',
        top: 24,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        transform: [
          {
            translateY: this._animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -this.props.height / 2],
            }),
          },
          {
            scale: this._animatedIsFocused.interpolate({
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
                ref={this.inputRef}
                multiline={multiline}
                secureTextEntry={this.state.isPasswordHidden}
                placeholderTextColor={placeHolderColor}
                onFocus={this.onFocusInput}
                onBlur={this.onBlureInput}
                style={[
                  styles.input,
                  {color: inputTextColor},
                  styleWithOutFontWeight,
                  {
                    height: multiline ? 70 : 20,
                  },
                ]}
                {...rest}
              />
            </View>
            {secureTextEntry && (
              <AppIconButton
                enabled={this.props.value.length > 0}
                color={_iconColor}
                onPress={() =>
                  this.setState({
                    isPasswordHidden: !this.state.isPasswordHidden,
                  })
                }
                containerStyle={styles.show_password_icon}
                size={28}
                // type={IconType.ionicons}
                name={this.state.isPasswordHidden ? 'eye-disable' : 'eye-able'}
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
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps, null, null, {forwardRef: true})(Input);
