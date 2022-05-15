import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Mission = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>
                Icon
            </Text>
            <Text style={styles.header}>
                Our mission
            </Text>
            <Text style={styles.textStyle}>
                We believe one connection can change a life. That’s why we’re on a mission to help people connect in easier, smarter and more productive ways.
            </Text>
            <TouchableOpacity style={styles.btnStyle}>
                <Text style={styles.btnTextStyle}>
                    Apply for Beta
                </Text>
            </TouchableOpacity>
        </View>
    );
}

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

export default Mission;