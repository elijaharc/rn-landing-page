import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text>
                Icon
            </Text>
            <Text style={styles.header}>
                Making the world a smaller place
            </Text>
            <Text style={styles.textStyle}>
                Copyright © 2022, Bridge. All rights reserved.
            </Text>
            <Text style={styles.textStyle}>
                Terms Privacy Cookies
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        alignItems: 'center',
        paddingTop: 20,
        marginTop: 120,
    },
    header: {
        fontSize: 12,
        paddingTop: 10,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 10,
        paddingHorizontal: 80,
        marginTop: 10,
        color: 'grey'
    },
    btnStyle: {
        backgroundColor: '#06f',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    btnTextStyle: {
        color: 'white',
    }
});

export default Footer;