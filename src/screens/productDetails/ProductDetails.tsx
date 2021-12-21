import React, {useEffect, useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {AppScreenContainer, AppSpinner, showError, AppText} from 'common';
import {AppHeader} from 'components';
import {styles} from './styles';
import I18n from 'react-native-i18n';
import axios from 'axios';
import {API_ENDPOINT} from 'utils/urls.json';
import {Details} from 'components';
import {EmptyList} from 'components/emptyList/EmptyList';
import {View} from 'react-native';

export const ProductDetails: NavigationFunctionComponent = (props) => {
  const {deepLink, data, id} = props;

  return (
    <>
      <AppHeader title={I18n.t('product_details')} />
      <AppScreenContainer style={styles.container}>
        <Details data={props.data} />
      </AppScreenContainer>
    </>
  );
};
