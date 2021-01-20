import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {
  AppText,
  LIGHT_COLORS,
  AppImage,
  NeomorphContainer,
  responsiveFontSize,
  AppIconButton,
  FixedNeomorphContainer,
  IconType,
} from 'common';
import {addToCart, removeItemCart} from 'slices/cart';
import {useDispatch} from 'react-redux';
import {useTheme} from 'slices';

interface Props {
  title?: String;
  image?: String;
  category?: String;
  price?: Number;
  id?: Number;
  countOfProduct?: Number;
  cart?: Boolean;
}

export const Description: React.FC<Props> = ({
  title,
  category,
  price,
  id,
  image,
  countOfProduct,
  cart,
}) => {
  const data = {
    title,
    category,
    price,
    id,
    image,
  };

  const dispatch = useDispatch();
  return (
    <View style={styles.textContainer}>
      <AppText
        numberOfLines={2}
        style={{
          fontWeight: 'SemiBold',
        }}>
        {title}
      </AppText>
      <View style={styles.tagCategory}>
        <AppText numberOfLines={1} style={styles.tagCategoryTest}>
          {category}
        </AppText>
      </View>
      <View style={styles.priceContainer}>
        <AppText
          style={{
            fontWeight: 'BoldItalic',
            marginHorizontal: 10,
          }}>
          {price}
        </AppText>
      </View>
      <View style={styles.actionContainer}>
        <ActionButton
          iconName="add"
          onPress={() => {
            dispatch(addToCart({item: data, addWithCount: 1}));
          }}
        />
        {cart && (
          <AppText
            style={[
              styles.counterStyle,
              {
                fontWeight: 'ExtraBold',
              },
            ]}>
            {countOfProduct}
          </AppText>
        )}
        {cart && (
          <ActionButton
            iconName="minus"
            type={IconType.entypo}
            enabled={countOfProduct === 1 ? false : true}
            onPress={() => {
              dispatch(addToCart({item: data, addWithCount: -1}));
            }}
          />
        )}
      </View>
      <View style={styles.trashIcon}>
        {cart && (
          <AppIconButton
            name="trash"
            color={LIGHT_COLORS.errorBackground}
            size={responsiveFontSize(10)}
            onPress={() => {
              dispatch(removeItemCart({id: id}));
            }}
          />
        )}
      </View>
    </View>
  );
};

const ActionButton = ({onPress, iconName, enabled = true, ...rest}) => {
  const {
    colors: {iconColor, backgroundColor},
  } = useTheme();
  return (
    <FixedNeomorphContainer style={styles.back_icon_container}>
      <AppIconButton
        onPress={onPress}
        style={styles.back_icon}
        {...rest}
        containerStyle={[
          styles.back_icon_container,
          {
            backgroundColor: !enabled
              ? LIGHT_COLORS.placeHolderColor
              : 'transparent',
          },
        ]}
        name={iconName}
        size={20}
        color={iconColor}
        enabled={enabled}
      />
    </FixedNeomorphContainer>
  );
};
