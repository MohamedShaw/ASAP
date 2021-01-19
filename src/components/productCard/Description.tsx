import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {
  AppText,
  LIGHT_COLORS,
  AppImage,
  NeomorphContainer,
  responsiveFontSize,
} from 'common';

interface Props {
  title?: String;
  image?: String;
  category?: String;
  price?: Number;
}

export const Description: React.FC<Props> = ({title, category, price}) => {
  return (
    <View style={styles.textContainer}>
      <AppText
        numberOfLines={2}
        style={{
          fontWeight: 'SemiBold',
        }}>
        {title}
      </AppText>
      <View style={styles.tagCategory}>
        <AppText numberOfLines={1} style={styles.tagCategoryTest}>
          {category}
        </AppText>
      </View>
      <View style={styles.priceContainer}>
        <AppText
          style={{
            fontWeight: 'BoldItalic',
            marginHorizontal: 10,
          }}>
          {price}
        </AppText>
      </View>
    </View>
  );
};
