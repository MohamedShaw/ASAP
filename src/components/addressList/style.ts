import { StyleSheet } from "react-native";
import { responsiveHeight, LIGHT_COLORS } from "common";

export const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    cardConatiner: { alignSelf: 'stretch', height: 70, borderRadius: 10, justifyContent: 'center', paddingHorizontal: 7 },
    neoMorphContainer: {
        flex: 1,
        // marginHorizontal: 15,
        marginBottom: 10,
        backgroundColor: 'white',

    },

})