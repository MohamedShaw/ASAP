import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  markerCircle: {
    width: 10.5,
    height: 10.5,
    borderRadius: 5.25,
  },
  markerStick: {
    width: 1.5,
    height: 7.5,
  },
  googleDisContainer: {
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 10,
    // position: 'absolute',
    // bottom: 0,
    // zIndex: 100000,
  },
  subContainer: {
    alignSelf: 'stretch',
  },
  LocationText: {
    fontSize: 16,
    lineHeight:31,
    marginVertical: 5,
  },
  googleLocationContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginBottom: 5,
  },
  AddLocation: {marginVertical: 15},
  addressStyle: {marginHorizontal: 8},
  LocationTextDesc:{fontSize:14,lineHeight:31}
});
