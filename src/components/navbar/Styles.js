import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parentNav: {
        height: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    navButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: 180,
        justifyContent: 'space-between',
    },
    btnTextStyle: {
        color: 'white',
        paddingHorizontal: 12,
        paddingVertical: 9,
        fontSize: 13,
        fontWeight: 'bold',
    },
    textStyle: {
        color: '#0038ff',
        fontWeight: '600',
    },
    btnStyle: {
        backgroundColor: '#0038ff',
        borderRadius: 50,
        marginRight: 1,
        paddingHorizontal: 3,
    }
});

export default styles;