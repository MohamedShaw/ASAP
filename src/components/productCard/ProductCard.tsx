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
    description?: String;
    _id: string;
  };
}
export const ProductCard: React.FC<Props> = (props) => {
  const {data} = props;

  console.log("data", data?._id);
  
  const onNavigate = () => {
    AppNavigation.push('productDetails', {
      data: props.data,
      deepLink: false,
    });
  };

  return (
    <NeomorphContainer style={styles.neoMorphContainer}>
      <RectButton style={styles.buttonContainer}>
        <Description title={data?.description} id={data?._id} />
      </RectButton>
    </NeomorphContainer>
  );
};
