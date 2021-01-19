import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

import {AppScreenContainer} from 'common';
import {BottomTabs, ProductList, AppHeader} from 'components';
import I18n from 'react-native-i18n';
import {styles} from './style';

export const Home: NavigationFunctionComponent = () => {
  return (
    <>
      <AppScreenContainer style={styles.conatiner}>
        <AppHeader title={I18n.t('home_header')} hideBack cart home />
        <ProductList />
      </AppScreenContainer>
      <BottomTabs />
    </>
  );
};
