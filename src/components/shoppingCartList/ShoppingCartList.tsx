import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {AppList, AppText, LIGHT_COLORS} from 'common';

import {ProductCard} from '../productCard/ProductCard';
import {EmptyList} from '../emptyList/EmptyList';
import {useCart} from 'slices/cart';
import {View} from 'react-native';
import I18n from 'react-native-i18n';
interface Props {}
export const ShoppingCartList: React.FC<Props> = () => {
  const cart = useCart();

  return (
    <>
      <AppList
        data={Object.values(cart.cart)}
        renderItem={({item, index}) => (
          <ProductCard
            data={item.item}
            cart={true}
            countOfProduct={item.count}
          />
        )}
        style={styles.listContainer}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={
          Object.keys(cart.cart).length === 0 && <EmptyList />
        }
      />
      {cart.cart_total > 0 && (
        <View style={styles.totalContainer}>
          <AppText>{I18n.t('total')}</AppText>
          <AppText>{cart.cart_total.toFixed(2)}</AppText>
        </View>
      )}
    </>
  );
};
