import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 84, width: 84, borderRadius: 42,
  },
  img: {
    height: 74,
    width: 74,
    borderRadius: 32,
    paddingTop: 11,
  },
  iconContainer: {
    right: -5,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
});