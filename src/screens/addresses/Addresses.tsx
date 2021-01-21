import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

import {AppScreenContainer, AppButton} from 'common';
import {AppHeader, ShoppingCartList, AddressList} from 'components';
import I18n from 'react-native-i18n';
import {AppNavigation} from 'navigation';
import {styles} from './style';
export const Addresses: NavigationFunctionComponent = () => {
  return (
    <>
      <AppHeader title={I18n.t('Location')} />

      <AppScreenContainer style={styles.container}>
        <AddressList />
        <AppButton
          title={I18n.t('Add_location')}
          onPress={() => {
            AppNavigation.push('mapScreen');
          }}
        />
      </AppScreenContainer>
    </>
  );
};
