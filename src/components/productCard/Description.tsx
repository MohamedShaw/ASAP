import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppText} from 'common';


interface Props {
  title?: String;
}

export const Description: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.textContainer}>
      <AppText
        numberOfLines={2}
        style={{
          fontWeight: 'SemiBold',
        }}>
        {title}
      </AppText>
    </View>
  );
};
