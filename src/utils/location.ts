import { AppState, Linking, Platform } from 'react-native';
import { request, PERMISSIONS, openSettings, check } from 'react-native-permissions';
import ConnectivityManager from 'react-native-connectivity-status';
import { LatLng } from 'react-native-maps';
import { GOOGLE_KEY } from './keys';
import { GOOGLEAPIS } from './urls.json';
import Axios, { Canceler } from 'axios';
import i18n from 'react-native-i18n'
import { LocationPermission } from 'models';

const { CancelToken } = Axios;



export const latitudeDelta = 0.007016387588862472;
export const longitudeDelta = 0.004741139709949493;


export const goToLocationSettings = () => {
  return Linking.openSettings();
};

export const requestAndCheckLocationPermissions = async (force?: boolean): Promise<LocationPermission> => {
  const result = await request(Platform.OS == 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  console.log("location result ", result)
  switch (result) {
    case 'unavailable':
    case 'blocked':
      return LocationPermission.blocked;
    case 'denied':
      return force ? requestAndCheckLocationPermissions(true) : LocationPermission.denied;
    case 'granted':
    case 'limited':
      return LocationPermission.granted;
  }
};



export const checkLocationPermissions = async (): Promise<LocationPermission> => {
  const result = await check(Platform.OS == 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  console.log("location result ", result)
  switch (result) {
    case 'unavailable':
    case 'blocked':
      return LocationPermission.blocked;
    case 'denied':
      return "denied";
    case 'granted':
    case 'limited':
      return LocationPermission.granted;
  }
};


// Check if Location Services are enabled
export const checkGPSStatus = ConnectivityManager.areLocationServicesEnabled;

export const listenToGPS = (onStatusChange: (status: boolean) => void) => {
  ConnectivityManager.addStatusListener(({ eventType, status }) => {
    if (eventType === 'location') {
      onStatusChange(status);
    }
  });
};

export const fetchAddressText = async (
  location: LatLng,
  cancel: (cancel: Canceler) => void,
) => {
  try {
    const url = `${GOOGLEAPIS}?latlng=${location.latitude},${location.longitude}&key=${GOOGLE_KEY}&language=${i18n.locale}`;
    const response = await Axios.get(url, {
      cancelToken: new CancelToken(cancel),
    });
    console.log("🚀 ~ file: location.ts ~ line 69 ~ response", response)
    const results = response.data.results;
    let textAddress = results && results[0]?.formatted_address;

    return textAddress;
  } catch (error) {
    console.log(
      '🚀 ~ file: MapScreenHOC.tsx ~ line 27 ~ changeLocation ~ error',
      error,
    );
    return null;
  }
};
