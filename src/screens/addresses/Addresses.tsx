import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

import {AppScreenContainer, AppButton} from 'common';
import {AppHeader, ShoppingCartList, AddressList} from 'components';
import I18n from 'react-native-i18n';
import {styles} from './style';
import {AppNavigation} from 'navigation';
export const Addresses: NavigationFunctionComponent = () => {
  return (
    <>
      <AppHeader title={I18n.t('cart_header')} />

      <AppScreenContainer style={{flex: 1, alignSelf: 'stretch'}}>
        <AddressList />
        <AppButton
          title="Add Another location"
          onPress={() => {
            AppNavigation.push('mapScreen');
          }}
        />
      </AppScreenContainer>
    </>
  );
};
