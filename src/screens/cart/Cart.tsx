import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

import {AppScreenContainer} from 'common';
import {AppHeader, ShoppingCartList} from 'components';
import I18n from 'react-native-i18n';
import {styles} from './style';
export const Cart: NavigationFunctionComponent = () => {
  return (
    <>
      <AppHeader title={I18n.t('cart_header')} />

      <AppScreenContainer style={styles.container}>
        <ShoppingCartList />
      </AppScreenContainer>
    </>
  );
};
