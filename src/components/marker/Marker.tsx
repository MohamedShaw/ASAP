import React from 'react';
import {LatLng} from 'react-native-maps';
import {styles} from './styles';
import {View} from 'react-native';
interface Props {
  location: LatLng | null;
}
const size = 30;
export const Marker: React.FC<Props> = (props) => {
  if (!props.location) return null;

  return (
    <View pointerEvents="box-none" style={styles.markerContainer}>
      <View style={styles.markerCircle} />
      <View style={styles.markerStick} />
    </View>
  );
};
