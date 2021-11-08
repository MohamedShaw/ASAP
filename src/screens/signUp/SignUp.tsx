import {AppScreenContainer} from 'common';
import {AppHeader} from 'components';
import {SignUpFormHoc} from 'containers';
import I18n from 'i18n-js';
import React from 'react';
import {useSelector} from 'react-redux';

export const SignUp = () => {
  const user = useSelector((state) => state.auth);
  console.log("user", user);
  
  return (
    <AppScreenContainer style={{flex: 1}}>
      <AppHeader title={I18n.t('sign_up')} hideBack center />
      <SignUpFormHoc />
    </AppScreenContainer>
  );
};
