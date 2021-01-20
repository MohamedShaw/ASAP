import { StyleSheet } from "react-native";
import { responsiveHeight, LIGHT_COLORS } from "common";

export const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 0
    },

    listContainer: {
        alignSelf: 'stretch',
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