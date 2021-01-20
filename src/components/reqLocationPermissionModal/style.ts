import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 455,
    alignSelf: 'stretch',
    borderRadius: 8,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  actions: {
    paddingTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  image: {
    width: 224,
    height: 159
  },
  title: {
    paddingTop: 15,
    fontSize: 20,
    lineHeight: 24
  },
  message: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    paddingTop: 11
  },
  go_to_setting: {
    marginBottom: 19,
  }
});
