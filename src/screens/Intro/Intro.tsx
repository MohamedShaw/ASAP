import React, {useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

// import {  } from 'components';
import {AppScreenContainer, AppText, AppInput} from 'common';
import {styles} from './style';
import FloatingInpu from 'common/input/FloatingInpu';

export const Intro: NavigationFunctionComponent = (props) => {
  const [text, setText] = useState('');
  console.log('text', text);

  return (
    <AppScreenContainer style={styles.conatiner}>
      <SafeAreaView />
      <AppText>ahmed reda</AppText>
      <FloatingInpu
        // placeholder="make it again"
        containerStyle={{
          alignSelf: 'stretch',
          // backgroundColor: 'red',
          height: 65,
          marginTop: 25,
          borderRadius: 7,
          borderColor: 'red',
          borderWidth: 1,
        }}
        height={65}
        label="label no"
        initialValue={text}
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
      />
      <SafeAreaView />
    </AppScreenContainer>
  );
};
