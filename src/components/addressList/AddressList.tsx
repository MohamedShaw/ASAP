import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {AppList, AppText, LIGHT_COLORS} from 'common';

import {ProductCard} from '../productCard/ProductCard';
import {EmptyList} from '../emptyList/EmptyList';
import {useCart} from 'slices/cart';
import {View} from 'react-native';
import I18n from 'react-native-i18n';
import {useLocation} from 'slices';
import {AddressCard} from './AddressCard';
interface Props {}
export const AddressList: React.FC<Props> = () => {
  const {location} = useLocation();
  console.log('location', location);

  return (
    <>
      <AppList
        data={location}
        renderItem={({item, index}) => <AddressCard {...item} />}
        style={styles.listContainer}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={location.length === 0 && <EmptyList />}
      />
    </>
  );
};
