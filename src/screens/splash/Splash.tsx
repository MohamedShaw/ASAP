import {AppScreenContainer, AppText, InnerNeomorphContainer} from 'common';
import {AppHeader} from 'components';
import {AppNavigation} from 'navigation';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
export const Splash = () => {
  return (
    <>
      <AppHeader title="Picture" hideBack/>
      <AppScreenContainer style={styles.containerWrap}>
        <InnerNeomorphContainer style={styles.container}>
          <RectButton style={[styles.button, styles.container]}>
            <AppText>Asset Invontry</AppText>
          </RectButton>
        </InnerNeomorphContainer>
        <InnerNeomorphContainer
          style={{...styles.container, marginVertical: 15}}>
          <RectButton
            style={[styles.button, styles.container]}
            onPress={() => {
              AppNavigation.push('home');
            }}>
            <AppText>Model</AppText>
          </RectButton>
        </InnerNeomorphContainer>
        <InnerNeomorphContainer style={styles.container}>
          <RectButton style={[styles.button, styles.container]}>
            <AppText>Person</AppText>
          </RectButton>
        </InnerNeomorphContainer>
      </AppScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  containerWrap: {flex: 1, alignSelf: 'stretch', paddingTop: 20},
  container: {
    height: 40,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
  },
  button: {backgroundColor: '#EAEAEA', flex: 1, alignSelf: 'stretch'},
});
