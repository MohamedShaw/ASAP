import React, {useEffect, useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {View, RefreshControl, Alert} from 'react-native';
import {
  AppScreenContainer,
  AppImage,
  responsiveHeight,
  AppText,
  responsiveFontSize,
  LIGHT_COLORS,
} from 'common';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {Hint} from './Hint';
import I18n from 'react-native-i18n';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

interface Props {
  data?: {
    title?: String;
    image?: String;
    description?: String;
    price?: Number;
  };
}

export const Details: React.FC<Props> = (props) => {
  const {
    data: {title, image, price, description},
  } = props;
  const {titleColor, primary} = useSelector(
    (state: RootStore) => state.theme.colors,
  );

  const color = {color: titleColor};
  if (!title) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
      <AppImage
        source={{uri: image}}
        resizeMode="stretch"
        style={styles.image}
      />
      <Hint label={I18n.t('product_title')} />
      <AppText style={[color]}>{title}</AppText>
      <Hint label={I18n.t('product_description')} />

      <AppText style={[color]}>{description}</AppText>
      <Hint label={I18n.t('product_price')} />

      <AppText style={[styles.price, {fontWeight: 'ExtraBold'}]}>
        {price}
      </AppText>
    </ScrollView>
  );
};
