import React, {useEffect, useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {AppScreenContainer} from 'common';
import {AppHeader} from 'components';
import {styles} from './styles';
import I18n from 'react-native-i18n';
import axios from 'axios';
import {API_ENDPOINT} from 'utils/urls.json';
import {Details} from 'components';

export const ProductDetails: NavigationFunctionComponent = (props) => {
  console.log('props', props);

  const {data} = props;
  useEffect(() => {
    getProduct();
  });
  const getProduct = async () => {
    try {
      const res = await axios.get(`${API_ENDPOINT}products/${data.id}`);
      console.log('res -->>>>>>', res);
    } catch (error) {
      console.log('error', JSON.parse(JSON.stringify(error)));
    }
  };
  return (
    <>
      <AppHeader title={I18n.t('product_details')} />

      <AppScreenContainer style={styles.container}>
        <Details data={data} />
      </AppScreenContainer>
    </>
  );
};
