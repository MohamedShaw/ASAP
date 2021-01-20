import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {
  AppText,
  LIGHT_COLORS,
  AppImage,
  NeomorphContainer,
  responsiveFontSize,
} from 'common';
import {RectButton} from 'react-native-gesture-handler';

import {AppNavigation} from 'navigation';
import {Description} from './Description';
import {useCart} from 'slices/cart';
interface Props {
  data?: {
    title?: String;

    image?: String;
    category?: String;
    price?: Number;
    id?: Number;
  };
  card?: Boolean;
  countOfProduct?: Number;
}
export const ProductCard: React.FC<Props> = (props) => {
  const {
    data: {title, image, price, category, id},
    cart = false,
    countOfProduct,
  } = props;

  const onNavigate = () => {
    AppNavigation.push('productDetails', {
      data: props.data,
      deepLink: false,
    });
  };

  return (
    <NeomorphContainer style={styles.neoMorphContainer}>
      <RectButton style={styles.buttonContainer} onPress={!cart && onNavigate}>
        <AppImage
          source={{uri: image}}
          style={styles.imageContainer}
          resizeMode="contain"
        />
        <Description
          title={title}
          price={price}
          category={category}
          id={id}
          image={image}
          countOfProduct={countOfProduct}
          cart={cart}
        />
      </RectButton>
    </NeomorphContainer>
  );
};
