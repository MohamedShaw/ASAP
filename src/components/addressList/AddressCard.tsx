import React from 'react';
import {View} from 'react-native';
import {AppText, NeomorphContainer} from 'common';
import {styles} from './style';
export const AddressCard = ({address}) => {
  return (
    <NeomorphContainer style={styles.neoMorphContainer}>
      <View style={styles.cardConatiner}>
        <AppText numberOfLines={2}>{address}</AppText>
      </View>
    </NeomorphContainer>
  );
};
