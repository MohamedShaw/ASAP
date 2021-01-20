import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GeoLocation, { GeoPosition, PositionError } from 'react-native-geolocation-service';
import { useSelector } from 'react-redux';
import { RootStore, AppThunk } from 'store';
import { Platform } from 'react-native';
import { requestAndCheckLocationPermissions, checkLocationPermissions } from 'utils/location';
import { LocationPermission } from 'models';

interface Location {
  position: GeoPosition | null;
  granted: LocationPermission;
  isEnabled: boolean;
}

const initialState: Location = {
  position: null,
  granted: LocationPermission.denied,
  isEnabled: false
};


// let locationListenerId;

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<GeoPosition>) => {
      state.granted = LocationPermission.granted;
      state.isEnabled = true;
      state.position = action.payload;
    },
    setGranted: (state, action: PayloadAction<LocationPermission>) => {
      state.granted = action.payload;
    },
    setIsEnabled: (state, action: PayloadAction<boolean>) => {
      state.isEnabled = action.payload;
    },
  },
});

export const { setPosition, setGranted, setIsEnabled } = locationSlice.actions;

export const locationReducer = locationSlice.reducer;

export const requestLocationPermissions = (): AppThunk => async (dispatch) => {
  const granted = await requestAndCheckLocationPermissions();
  dispatch(setGranted(granted))
}


export const watchLocation = (): AppThunk => async (dispatch) => {
  console.log('looooooooo');


  const options = { enableHighAccuracy: true, showLocationDialog: true, forceRequestLocation: false };

  const _onLocationChange = (position) => {
    console.log("postion", position)
    dispatch(setPosition(position))
  };
  const _errorCalback = async (error) => {
    console.log("error", error)
    switch (error.code) {
      case PositionError.PERMISSION_DENIED: {
        const result = await checkLocationPermissions();
        dispatch(setGranted(result));
      }
        break;
      case PositionError.POSITION_UNAVAILABLE: dispatch(setIsEnabled(false));
        break;
    }
  };

  GeoLocation.getCurrentPosition(_onLocationChange, _errorCalback, options)
  GeoLocation.stopObserving();
  return GeoLocation.watchPosition(_onLocationChange, _errorCalback, options);
}

export const useLocation = () => {
  return useSelector((state: RootStore) => state.location);
}
