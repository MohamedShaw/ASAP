import {PermissionsAndroid} from 'react-native';

export const writeReadStorgePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export const checkLocationPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }
  return false;
};

export const locationPermission = async (force = true) => {
  const request = () => {
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      // PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    );
  };

  try {
    do {
      let granted = await request();
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else if (granted == PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        return false;
      }
    } while (force);
  } catch (err) {
    return false;
  }
  return false;
};
