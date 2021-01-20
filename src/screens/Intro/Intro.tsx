import React, {useState} from 'react';
import {Alert, SafeAreaView, View, I18nManager, Linking} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

// import {  } from 'components';
import {AppScreenContainer, AppText, AppInput, AppButton} from 'common';
import {styles} from './style';
import FloatingInpu from 'common/input/FloatingInpu';
import I18n from 'react-native-i18n';
import {setLang, Lang} from 'translation';
import {BottomTabs, AppHeader} from 'components';
import {AppNavigation} from 'navigation';
import {locationPermission} from 'utils/requestPermissionsAndroid';
import {checkNotifications} from 'react-native-permissions';

export const Intro: NavigationFunctionComponent = (props) => {
  return (
    <>
      <AppHeader title={I18n.t('profile')} hideBack cart />
      <AppScreenContainer style={styles.conatiner}>
        <SafeAreaView />

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 120,
          }}>
          <AppButton
            title="changel Lang"
            onPress={() => {
              console.log('I18n.locale ', I18n.locale);

              setLang(I18n.locale === Lang.ar ? Lang.en : Lang.ar);
            }}
            style={{
              flex: 1,
            }}
          />
          <View style={{width: 20}} />
          <AppButton
            title="Adresses"
            onPress={() => {
              AppNavigation.push('addresses');
            }}
            style={{
              flex: 1,
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <AppButton
            title=" enable notification"
            onPress={() => {
              Linking.openSettings();
            }}
            style={{
              flex: 1,
            }}
          />
          <View style={{width: 20}} />

          <AppButton
            title="enable Location"
            onPress={() => {
              locationPermission();
            }}
            style={{
              flex: 1,
            }}
          />
        </View>

        <SafeAreaView />
      </AppScreenContainer>
      <BottomTabs />
    </>
  );
};
