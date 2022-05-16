import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 300,
        alignItems: 'center',
        paddingTop: 20,
    },
    header: {
        fontSize: 20,
        paddingTop: 20,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 10
    },
    textStyle: {
        fontSize: 15,
        paddingHorizontal: 60,
        marginTop: 22,
        textAlign: 'center',
        fontWeight: '400'
    },
    btnStyle: {
        backgroundColor: '#06f',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginTop: 20,
    },
    btnTextStyle: {
        color: 'white',
        fontWeight: '600',
    },
    icon: {
        marginTop: 60
    }
});

export default styles;