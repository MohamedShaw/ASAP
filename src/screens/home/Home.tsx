import React, {useEffect} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

import {AppButton, AppIconButton, AppScreenContainer, DARK_COLORS, IconType, LIGHT_COLORS} from 'common';
import {BottomTabs, ProductList, AppHeader} from 'components';
import I18n from 'react-native-i18n';
import {styles} from './style';
import { AppNavigation } from 'navigation';

export const Home: NavigationFunctionComponent = (props) => {
  return (
    <>
      <AppScreenContainer style={styles.conatiner}>
        <AppHeader title={I18n.t('home_header')} hideBack home />
        <ProductList />
        <AppIconButton
          name="plus"
          type={IconType.entypo}
          size={20}
          color="white"
          containerStyle={styles.button}
          onPress={()=>{
            AppNavigation.push("addTask")
          }}
        />
      </AppScreenContainer>
    </>
  );
};
