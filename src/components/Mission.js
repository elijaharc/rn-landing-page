import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import i18n from "i18n-js";

const Mission = ({ navigation, locale }) => {
    i18n.locale = locale;

    return (
        <View style={styles.container}>
            <Text style={styles.icon}>
                Icon
            </Text>
            <Text style={styles.header}>
                {i18n.t('mission')}
            </Text>
            <Text style={styles.textStyle}>
                {i18n.t('weBelieve')}
            </Text>
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Beta', { locale: locale })}>
                <Text style={styles.btnTextStyle}>
                    {i18n.t('betaApply')}
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