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
import {addToCart, useCart} from 'slices/cart';

interface Props {
  title?: string;
  hideBack?: boolean;
  rightItem?: ReactElement;
  onBackPress?: () => void;
  cart?: boolean;
  home?: boolean;
  center?: boolean;
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

  return (
    <>
      <SafeAreaView style={{backgroundColor}} />
      <FixedNeomorphContainer style={{...styles.container, backgroundColor}}>
        <View style={[styles.left, styles.items]}>
          {!hideBack && (
            <FixedNeomorphContainer style={styles.back_icon_container}>
              <AppIconButton
                onPress={onBackPress}
                style={styles.back_icon}
                // containerStyle={styles.back_icon_container}
                name="back"
                size={20}
                color={iconColor}
              />
            </FixedNeomorphContainer>
          )}
        </View>

        <View
          style={[
            styles.content,
            props.center && {justifyContent: 'center'},
            styles.items,
          ]}>
          <AppText
            numberOfLines={1}
            style={[styles.title, {fontWeight: 'Bold'}]}>
            {title}
          </AppText>
        </View>
        {cart && (
          <View style={[styles.right, styles.items]}>
            {cart ? <CartIcon /> : rightItem}
          </View>
        )}
      </FixedNeomorphContainer>
    </>
  );
};

const CartIcon = () => {
  const {items_count} = useCart();
  const {
    colors: {iconColor, backgroundColor},
  } = useTheme();
  const navigatToCart = () => {
    AppNavigation.push('cart');
  };
  return (
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
      <View style={styles.countText}>
        <AppText style={{color: 'white', fontSize: responsiveFontSize(4)}}>
          {items_count > 9 ? '+9' : items_count}
        </AppText>
      </View>
    </View>
  );
};
