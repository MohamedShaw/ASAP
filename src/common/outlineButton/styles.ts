import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  subcontainer: {
    borderWidth: 2,
    borderRadius: 8,
    height: 50,
    alignSelf: 'stretch',
  },
  content: {
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    lineHeight: 25
  },
  text_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    flex: 1,
    alignSelf: 'center',
  }

});