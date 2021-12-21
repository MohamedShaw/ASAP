import { StyleSheet } from "react-native";
import { responsiveHeight } from "common";

export const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 0
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
        paddingHorizontal: 13,
        paddingTop:20
    },
    spinnerContainer: {
        height: 80
    }

})