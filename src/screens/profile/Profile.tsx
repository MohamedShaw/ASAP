import React, {useState} from 'react';
import {SafeAreaView, View, Linking} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

// import {  } from 'components';
import {AppScreenContainer, AppButton} from 'common';
import {styles} from './style';
import I18n from 'react-native-i18n';
import {setLang, Lang} from 'translation';
import {BottomTabs, AppHeader} from 'components';
import {AppNavigation} from 'navigation';
import {locationPermission} from 'utils/requestPermissionsAndroid';
import RNRestart from 'react-native-restart';

export const Profile: NavigationFunctionComponent = (props) => {
  return (
    <>
      <AppHeader title={I18n.t('profile')} hideBack cart />
      <AppScreenContainer style={styles.conatiner}>
        <SafeAreaView />

        <View style={styles.buttonContainer}>
          <AppButton
            title={I18n.t('change_lang')}
            onPress={() => {
              setLang(I18n.locale == Lang.ar ? Lang.en : Lang.ar);
              RNRestart.Restart();
            }}
            style={{
              flex: 1,
            }}
          />
          <View style={{width: 20}} />
          <AppButton
            title={I18n.t('addresses_list')}
            onPress={() => {
              AppNavigation.push('addresses');
            }}
            style={{
              flex: 1,
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            title={I18n.t('enable_notification')}
            onPress={() => {
              Linking.openSettings();
            }}
            style={{
              flex: 1,
            }}
          />
          <View style={{width: 20}} />

          <AppButton
            title={I18n.t('enable_location')}
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
      <BottomTabs {...props} />
    </>
  );
};
