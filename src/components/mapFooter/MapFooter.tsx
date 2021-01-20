import {AppButton, AppText} from 'common';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import i18n from 'react-native-i18n';
import {useTheme} from 'slices';

interface Props {
  address: string;
  onSubmit: Function;
}
export const MapFooter = React.forwardRef<any, Props>(
  ({address, onSubmit}) => {
    const {
      colors: {primary, backgroundColor,titleColor, textHintColor},
    } = useTheme();
    const renderMacker = () => (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={[styles.markerCircle, {backgroundColor: primary}]} />
        <View style={[styles.markerStick, {backgroundColor: primary}]} />
      </View>
    );

    const renderAddressDetails = () => (
      <View style={styles.addressStyle}>
        <AppText style={[styles.LocationTextDesc,{fontWeight:"Medium" , color:titleColor}]} numberOfLines={1}>{address || i18n.t('loading_dots')}</AppText>
      </View>
    );

    return (
      <View style={[styles.googleDisContainer, {backgroundColor}]}>
        <View style={styles.subContainer}>
          <AppText style={[styles.LocationText, {color: textHintColor , fontWeight:"Medium"}]}>
            {i18n.t('Location')}
          </AppText>
          <View style={styles.googleLocationContainer}>
            {renderMacker()}
            {renderAddressDetails()}
          </View>
        </View>
        <AppButton
          title={i18n.t('Add_location')}
          onPress={() => {
            onSubmit();
          }}
          style={styles.AddLocation}
          enabled={!!address}
        />
      </View>
    );
  },
);
