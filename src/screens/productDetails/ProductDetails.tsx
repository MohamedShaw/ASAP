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

  const [loading, setLoading] = useState<Boolean>(deepLink);
  const [productData, setData] = useState(!data ? null : data);

  useEffect(() => {
    console.log('id ---->>', id);

    if (id) getProduct();
  }, []);
  const getProduct = async () => {
    console.log('product');

    setLoading(true);
    try {
      const res = await axios.get(`${API_ENDPOINT}products/${id}`);
      setData(res.data);
    } catch (error) {
      setData(null);
      showError('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AppHeader title={I18n.t('product_details')} />
      <AppScreenContainer style={styles.container}>
        {loading ? (
          <AppSpinner />
        ) : productData === null ? (
          <EmptyList />
        ) : (
          <Details data={productData} />
        )}
      </AppScreenContainer>
    </>
  );
};
