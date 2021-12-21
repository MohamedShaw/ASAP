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
    title?: string;
    image: string;
    category: string;
  };
}
export const ProductCard: React.FC<Props> = (props) => {
  const {data} = props;

  const onNavigate = () => {
    AppNavigation.push('productDetails', {
      data: props.data,
      deepLink: false,
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <NeomorphContainer style={styles.neoMorphContainer}>
        <RectButton style={styles.buttonContainer} onPress={onNavigate}>
          <AppImage
            source={{uri: data?.image}}
            style={{width: '80%', height: 95}}
          />
        </RectButton>
        <Description title={data?.category} />
      </NeomorphContainer>
    </View>
  );
};
