import { StyleSheet } from 'react-native';
import { LIGHT_COLORS, responsiveHeight, responsiveFontSize } from 'common';

export const styles = StyleSheet.create({
    container: { flex: 1, paddingBottom: 10, alignSelf: 'stretch', },
    price: {
        color: LIGHT_COLORS.primary,
    },
    image: {
        width: '100%',
        height: responsiveHeight(30),
    },
    hint: {
        fontSize: responsiveFontSize(8),
        marginVertical: responsiveHeight(2),
    },
});
