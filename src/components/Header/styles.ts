import { StyleSheet } from "react-native";
import { APPBAR_HEIGHT } from 'common/utils/responsiveDimmensions';

export const styles = StyleSheet.create({
  container: {
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  items: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 34,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  left: {
    justifyContent: 'flex-start'
  },
  right: {
    justifyContent: 'flex-end'
  },
  back_icon_container: {
    height: 38,
    width: 38,
    borderRadius: 9.6,
    marginLeft: 20,
    marginRight: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  back_icon: {
  }
});
