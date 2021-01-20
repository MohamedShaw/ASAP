import {StyleSheet} from 'react-native';

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
  HocContainer: {flex: 1},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
