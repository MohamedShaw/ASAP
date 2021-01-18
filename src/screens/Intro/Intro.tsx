import React, {useState} from 'react';
import {Alert, SafeAreaView, View, I18nManager} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

// import {  } from 'components';
import {AppScreenContainer, AppText, AppInput, AppButton} from 'common';
import {styles} from './style';
import FloatingInpu from 'common/input/FloatingInpu';
import I18n from 'react-native-i18n';
import {setLang, Lang} from 'translation';
import {BottomTabs} from 'components';

export const Intro: NavigationFunctionComponent = (props) => {
  const [text, setText] = useState('');
  console.log('text', text);

  return (
    <>
      <AppScreenContainer style={styles.conatiner}>
        <SafeAreaView />
        <AppText>{I18n.t('name')}</AppText>

        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppButton
            title="changel Lang"
            onPress={() => {
              setLang(I18n.locale == Lang.ar ? Lang.en : Lang.ar);
            }}
          />
        </View>

        <SafeAreaView />
      </AppScreenContainer>
      <BottomTabs />
    </>
  );
};
