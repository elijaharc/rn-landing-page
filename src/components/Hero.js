import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Hero = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Collaborate with your network in real-time
            </Text>
            <Text style={styles.textStyle}>
                Connect people easily, yet personally. Offer intros at scale, discover warm intros, uncover insights, and connect the dots in real-time with the people you trust.
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
        backgroundColor: '#06f',
        height: 500,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        paddingHorizontal: 60,
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
    }
});

export default Hero;