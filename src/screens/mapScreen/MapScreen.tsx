import React, {useEffect} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {MapHOC, TrackLocationHOC} from 'containers';
import {LatLng} from 'react-native-maps';
import {useDispatch} from 'react-redux';
// import {setLocation} from 'slices';
import {AppHeader} from 'components';
import I18n from 'react-native-i18n';
import {addLocation, watchLocation, useLocation} from 'slices';
import {AppNavigation} from 'navigation';

export const MapScreen: NavigationFunctionComponent = () => {
  const dispatch = useDispatch();
  const loc = useLocation();
  console.log('locations that save -->>', loc);

  useEffect(() => {
    dispatch(watchLocation());
  }, []);
  return (
    <>
      <AppHeader title={I18n.t('Add_location')} />
      <MapHOC
        onSubmit={(location: LatLng, address) => {
          console.log('location', location, address);

          const item = {
            location,
            address,
          };

          dispatch(addLocation(item));
          AppNavigation.pop();
        }}
      />
    </>
  );
};
