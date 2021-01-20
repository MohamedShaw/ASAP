import { screenHeight } from "common/utils/responsiveDimmensions";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: screenHeight,
  },
  kyboardView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
