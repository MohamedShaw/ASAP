import { StyleSheet } from "react-native";
import { LIGHT_COLORS, responsiveHeight } from "common";

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor:'#F4F4F4'
  },
  imageContainer: {
    flex: 1,
    height: 150,
    marginHorizontal: 7
  },
  textContainer: {
    flex: 2,
    paddingTop: 10
    // backgroundColor: "red"
  },
  listContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: responsiveHeight(3),
  },
  spinnerContainer: {
    height: 80
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: 50,
    right: 25,
    backgroundColor: LIGHT_COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }

})