import { windowWidth } from "common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon_container: {
    height: 40,
    width: 42,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addItem: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 45,
    borderRadius: 10,


  },
  addItemText: {
    fontSize: 13,
  },
  addItemContainer: {
    height: 45,
    width: 115,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '23.5%',
  }

});