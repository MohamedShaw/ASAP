import React, {useEffect, useRef, useState} from 'react';
import {
  MapFooter,
  GoogleMap,
  MapSearch,
  RelocateLocationButton,
} from 'components';
import {useLocation} from 'slices';
import {fetchAddressText} from 'utils';
import {LatLng} from 'react-native-maps';
import i18n from 'react-native-i18n';
import {useDebouncedCallback} from 'use-debounce/lib';

interface Props {
  onSubmit: (location: LatLng) => void;
  intailLocation?: LatLng;
}
export const MapHOC: React.FC<Props> = ({onSubmit, intailLocation}) => {
  const {position} = useLocation();
  const [location, setLocation] = useState<LatLng>(
    intailLocation || (position?.coords as LatLng),
  );

  const [address, setAdress] = useState<string>('');
  const searchLocation = useRef(location);

  useEffect(() => {
    let cancel;
    if (location) {
      (async () => {
        setAdress(i18n.t('loading_dots'));
        const addressText = await fetchAddressText(
          location,
          (c) => (cancel = c),
        );
        setAdress(addressText);
      })();
    }
    return () => {
      if (cancel) cancel('cancel');
    };
  }, [location]);

  const _onChangeLocation = useDebouncedCallback((location: LatLng) => {
    setLocation(location);
  }, 200).callback;

  const relocateLocation = () => {
    if (!position) return;
    let {latitude, longitude} = position.coords;
    const loc = {latitude, longitude};
    searchLocation.current = loc;
    _onChangeLocation(loc);
  };

  return (
    <>
      <GoogleMap
        location={searchLocation.current}
        onChangeLocation={_onChangeLocation}
      />
      <MapFooter address={address} onSubmit={onSubmit.bind(this, location)} />
      <RelocateLocationButton onRelocateLocation={relocateLocation} />
    </>
  );
};
