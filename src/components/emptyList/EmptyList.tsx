import React from 'react';
import {View} from 'react-native';
import {AppText} from 'common';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {styles} from './style';

interface Props {}

export const EmptyList: React.FC<Props> = () => {
  const {
    colors: {primary, titleColor, buttonTextColor, white},
  } = useSelector((state: RootStore) => state.theme);
  return (
    <View style={styles.container}>
      <AppText style={{color: primary}}>{}Opps , no data Try Again</AppText>
    </View>
  );
};
