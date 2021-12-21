import React, {useEffect, useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {View, RefreshControl, Alert} from 'react-native';
import {styles} from './styles';
// import {} from 'components';
import {AppText, responsiveFontSize, responsiveHeight} from 'common';

interface Props {
  label?: String;
}

export const Hint: React.FC<Props> = ({label}) => {
  return (
    <AppText
      style={[
        styles.hint,
        {
          fontWeight: 'ExtraBold',
        },
      ]}>
      {label} 
    </AppText>
  );
};
