import React from "react";
import { View, Text, StyleSheet } from "react-native";
import i18n from "i18n-js";

const Footer = ({ locale }) => {
    i18n.locale = locale;

    return (
        <View style={styles.container}>
            <Text>
                Icon
            </Text>
            <Text style={styles.header}>
                {i18n.t('smallerPlace')}
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