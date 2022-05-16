import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06f',
        height: 500,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        paddingHorizontal: 50,
        marginTop: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        paddingHorizontal: 40,
        marginTop: 10,
        textAlign: 'center',
    },
    btnStyle: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginTop: 20,
    },
    btnTextStyle: {
        color: '#0058ff',
        fontWeight: '600',
    },
    miniLogo: {
        borderRadius: 50,
        overflow: 'hidden'
    }
});

export default styles;