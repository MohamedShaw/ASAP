import { StyleSheet } from "react-native";
import { responsiveHeight, LIGHT_COLORS } from "common";

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
    },
    spinnerContainer: {
        height: 80
    },
    totalContainer: {
        backgroundColor: LIGHT_COLORS.primary,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 7,
        borderRadius: 7,
    }

})