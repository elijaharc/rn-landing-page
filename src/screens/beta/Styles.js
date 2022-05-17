import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06f',
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        paddingHorizontal: 10,
        marginTop: 80,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        paddingHorizontal: 40,
        marginTop: 30,
        textAlign: 'center',
    },
    waitlistStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        paddingHorizontal: 40,
        textAlign: 'center',
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginTop: 30,
    }
});

export default styles;