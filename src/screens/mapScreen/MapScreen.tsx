import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {MapHOC, TrackLocationHOC} from 'containers';
import {LatLng} from 'react-native-maps';
import {useDispatch} from 'react-redux';
// import {setLocation} from 'slices';
import {AppHeader} from 'components';
import I18n from 'react-native-i18n';

export const MapScreen: NavigationFunctionComponent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AppHeader title={I18n.t('Add_location')} />
      <MapHOC onSubmit={(location: LatLng) => {}} />
      <TrackLocationHOC />
    </>
  );
};
