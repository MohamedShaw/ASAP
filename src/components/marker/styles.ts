import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },
  markerContainer: {
    overflow: 'visible',
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerCircle: {
    backgroundColor: "#57AB85",
    width: 27,
    height: 27,
    borderRadius: 16.5,
    marginTop: 27
  },
  markerStick: {
    backgroundColor: "#57AB85",
    width: 2.5,
    height: 27
  }
});