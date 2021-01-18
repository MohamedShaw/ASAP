import React, { ReactNode, useContext } from 'react';
import { ViewStyle, View, StyleProp } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { AppText, CustomTextStyle } from '../text/Text';
import { useSelector } from 'react-redux';
import { RootStore } from 'store';
import { AppSpinner } from '../spinner/spinner';

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

export const AppOutlineButton = (props: Props) => {
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
    colors: { primary, titleColor, buttonTextColor, white },
  } = useSelector((state: RootStore) => state.theme);

  return (
    <RectButton
    style={[styles.container,style]}
      enabled={enabled && !processing}
      onPress={onPress}>
      <View style={[styles.subcontainer, { borderColor: primary }]}>
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
                      color: enabled ? primary : titleColor,
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
      </View>
    </RectButton>
  );
};
