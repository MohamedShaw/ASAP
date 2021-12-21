import { StyleSheet } from 'react-native';
import { LIGHT_COLORS, responsiveHeight, responsiveFontSize } from 'common';

export const styles = StyleSheet.create({
    container: { flex: 1, paddingBottom: 10, alignSelf: 'stretch', },
    price: {
        color: LIGHT_COLORS.primary,
    },
    image: {
        width: '70%',
        height: responsiveHeight(22),
    },
    hint: {
        fontSize: responsiveFontSize(8),
        marginVertical: responsiveHeight(2),
    },
    imageContainer:{
        padding: 20,
        backgroundColor: 'white',
        width:'65%',
        alignItems:'center',
        borderRadius:25
       
      },
      wrapper:{
        backgroundColor: '#EAEAEA',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingTop: 20,
        borderColor: '#EAEAEA',
        borderWidth: 1,
      }
});
