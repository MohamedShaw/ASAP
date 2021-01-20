import React, {useCallback, useEffect, useState} from 'react';
import {ReqLocationPermissionModal} from 'components';
import {goToLocationSettings} from 'utils/location';
import {
  useLocation,
  requestLocationPermissions,
  watchLocation,
} from 'slices/location';
import {useDispatch} from 'react-redux';
import {LocationPermission} from 'models';
import {AppState} from 'react-native';

export const TrackLocationHOC = () => {
  const [isVisible, setVisible] = useState(false);
  const [currentAppState, setCurrentAppState] = useState(AppState.currentState);
  const {granted, isEnabled, position} = useLocation();
  const dispatch = useDispatch();

  //permission
  //locationWatch

  const _handleAppStateChange = useCallback(
    (appState) => {
      setCurrentAppState(appState);
    },
    [setCurrentAppState],
  );

  useEffect(() => {
    dispatch(requestLocationPermissions());
  }, []);

  useEffect(() => {
    if (currentAppState === 'active') dispatch(watchLocation());
  }, [dispatch, currentAppState]);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    return () => AppState.removeEventListener('change', _handleAppStateChange);
  }, [_handleAppStateChange]);

  useEffect(() => {
    if (granted == LocationPermission.blocked) setVisible(true);
    else setVisible(false);
  }, [granted]);

  return (
    <>
      <ReqLocationPermissionModal
        isVisible={isVisible}
        onConfirm={() => {
          setVisible(false);
          setTimeout(() => {
            goToLocationSettings();
          }, 500);
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};
