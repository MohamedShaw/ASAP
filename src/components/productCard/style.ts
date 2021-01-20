import { StyleSheet } from 'react-native';
import { LIGHT_COLORS, responsiveFontSize } from 'common';

export const styles = StyleSheet.create({
    buttonContainer: {
        height: 170,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        height: 150,
        marginHorizontal: 7,
    },
    textContainer: {
        flex: 2,
        paddingTop: 10,
        // backgroundColor: "red"
    },
    tagCategory: {
        width: 150,
        borderRadius: 30,
        height: 35,
        backgroundColor: LIGHT_COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    tagCategoryTest: { color: LIGHT_COLORS.white },
    priceContainer: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
    },
    priceText: {
        fontSize: responsiveFontSize(7),

        marginHorizontal: 15,
    },
    textColor: { color: LIGHT_COLORS.titleColor },
    neoMorphContainer: {
        flex: 1,
        // marginHorizontal: 15,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    back_icon_container: {
        height: 38,
        width: 38,
        borderRadius: 9.6,

        justifyContent: 'center',
        alignItems: 'center',
    },
    trashIcon: { position: 'absolute', top: 10, right: 5 },
    counterStyle: {
        color: LIGHT_COLORS.primary,
        fontSize: responsiveFontSize(6),
        marginHorizontal: 15,
    },
    actionContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
    }
});
