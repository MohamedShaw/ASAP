import React, {useCallback, useEffect, useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, LatLng} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {styles} from './styles';
import {Marker} from '../marker/Marker';
import {latitudeDelta, longitudeDelta} from 'utils';
import {View} from 'react-native';

interface Props {
  onChangeLocation: (coordinate: LatLng) => void;
  location: LatLng | null;
}

export const GoogleMap: React.FC<Props> = (props) => {
  const {onChangeLocation, location} = props;
  const mapViewRef = useRef<MapView>(null);

  const animateToMyLocation = useCallback(
    (loc) => {
      console.log('🚀 ~ file: GoogleMap.tsx ~ line 33 ~ loc', loc);

      mapViewRef?.current?.animateToRegion(
        {
          ...loc,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        },
        400,
      );
    },
    [mapViewRef],
  );

  const onMapRegionChange = (region) => {
    onChangeLocation({latitude: region.latitude, longitude: region.longitude});
  };

  useEffect(() => {
    if (location) {
      const {longitude, latitude} = location;
      animateToMyLocation({longitude, latitude});
    }
  }, [animateToMyLocation, location]);

  return (
    <View style={styles.HocContainer}>
      <View style={styles.container}>
        <React.Fragment>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={mapViewRef}
            onMapReady={() => {
              if (location) animateToMyLocation(location);
            }}
            style={{...styles.absoluteFill}}
            rotateEnabled={false}
            showsUserLocation={false}
            showsMyLocationButton={false}
            showsCompass={false}
            onRegionChange={onMapRegionChange}
            onPress={(e) => {
              onChangeLocation(e.nativeEvent.coordinate);
            }}
          />
          <Marker location={location} />
        </React.Fragment>
      </View>
    </View>
  );
};
