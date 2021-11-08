import React, {useEffect, useState} from 'react';
import {View, RefreshControl} from 'react-native';
import {styles} from './style';
import {AppList, AppSpinner, showError, LIGHT_COLORS} from 'common';

import axios from 'axios';
import {API_ENDPOINT} from 'utils/urls.json';
import I18n from 'react-native-i18n';
import {ProductCard} from '../productCard/ProductCard';
import {EmptyList} from '../emptyList/EmptyList';
import {getProductList} from 'api/ProductApi';
interface Props {}
export const ProductList: React.FC<Props> = () => {
  const [loading, setLoading] = useState<Boolean>(true);

  const [refreshing, setRefresh] = useState<Boolean>(false);
  const [data, setData] = useState<Array<[]>>([]);
  let page = React.useRef(1);

  const getProducts = async (pageNumber) => {
    try {
      const response = await getProductList(pageNumber);
      console.log("response", response);
      

      const dataToShow = response.data;
      setData(dataToShow);
    } catch (error) {
      showError(I18n.t('error'));
    } finally {
      setLoading(false);
      setRefresh(false);
    }
  };
  useEffect(() => {
    if (!data.length) getProducts(1);
  }, [loading]);
  const handleMore = () => {
    if (data.length && !loading) {
      const nextPage = page.current++;
      setLoading(true);
      getProducts(nextPage);
    }
  };
  const Footer = () => {
    return loading ? (
      <View style={{alignSelf: 'stretch', alignItems: 'center'}}>
        <AppSpinner />
      </View>
    ) : null;
  };

  return (
    <AppList
      data={data}
      renderItem={({item, index}) => <ProductCard data={item} />}
      onEndReached={handleMore}
      style={styles.listContainer}
      ListFooterComponent={<Footer />}
      ListFooterComponentStyle={styles.spinnerContainer}
      onEndReachedThreshold={0.2}
      refreshControl={
        <RefreshControl
          colors={[LIGHT_COLORS.primary]}
          refreshing={refreshing}
          onRefresh={() => {
            setRefresh(true);
            getProducts(1);
          }}
        />
      }
      ListEmptyComponent={!loading && data.length === 0 && <EmptyList />}
    />
  );
};
