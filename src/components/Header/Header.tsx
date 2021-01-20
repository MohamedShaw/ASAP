import {AppIconButton} from 'common/iconButton/IconButton';
import React, {ReactElement} from 'react';
import {SafeAreaView, View, Platform} from 'react-native';
import {AppText} from 'common/text/Text';
import {IconType} from 'common/utils/icon';
import {styles} from './styles';
import {FixedNeomorphContainer} from 'common/fixedneomorphContainer/FixedNeomorphContainer';
import {useSelector, useDispatch} from 'react-redux';
import {RootStore} from 'store';
import {AppNavigation} from 'navigation';
import {useTheme} from 'slices';
import {LIGHT_COLORS, responsiveFontSize} from 'common';
import {addToCart} from 'slices/cart';

interface Props {
  title?: string;
  hideBack?: boolean;
  rightItem?: ReactElement;
  onBackPress?: () => void;
  cart?: boolean;
  home?: boolean;
}

export const AppHeader = (props: Props) => {
  const {
    title,
    hideBack,
    rightItem,
    onBackPress = () => AppNavigation.pop(),
    cart,
    home = false,
  } = props;
  const {
    colors: {iconColor, backgroundColor},
  } = useTheme();

  const navigatToCart = () => {
    AppNavigation.push('cart');
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor}} />
      <View style={[styles.container, {backgroundColor}]}>
        <View style={[styles.left, styles.items]}>
          {!hideBack && (
            <FixedNeomorphContainer style={styles.back_icon_container}>
              <AppIconButton
                onPress={onBackPress}
                style={styles.back_icon}
                containerStyle={styles.back_icon_container}
                name="back"
                size={20}
                color={iconColor}
              />
            </FixedNeomorphContainer>
          )}
          {home && (
            <FixedNeomorphContainer style={styles.back_icon_container}>
              <AppIconButton
                onPress={onBackPress}
                style={styles.back_icon}
                containerStyle={styles.back_icon_container}
                name="home"
                size={20}
                color={iconColor}
              />
            </FixedNeomorphContainer>
          )}
          {!home && hideBack && <View style={styles.back_icon_container} />}
        </View>
        <View style={[styles.content, styles.items]}>
          <AppText
            numberOfLines={1}
            style={[styles.title, {fontWeight: 'Bold'}]}>
            {title}
          </AppText>
        </View>
        <View style={[styles.right, styles.items]}>
          {cart ? (
            <View
              style={[
                styles.back_icon_container,
                {
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                },
              ]}>
              <FixedNeomorphContainer style={styles.back_icon_container}>
                <AppIconButton
                  onPress={navigatToCart}
                  style={styles.back_icon}
                  containerStyle={styles.back_icon_container}
                  name="ios-cart-outline"
                  size={20}
                  type={IconType.ionicons}
                  color={iconColor}
                />
              </FixedNeomorphContainer>
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 36,
                  backgroundColor: LIGHT_COLORS.primary,
                  position: 'absolute',
                  top: 0,
                  right: 0,

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AppText
                  style={{color: 'white', fontSize: responsiveFontSize(4)}}>
                  0
                </AppText>
              </View>
            </View>
          ) : (
            rightItem
          )}
        </View>
      </View>
    </>
  );
};
