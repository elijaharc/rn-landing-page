import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CountryFlag from "react-native-country-flag";
import i18n from 'i18n-js';
import BridgeLogo from '../svg/BridgeLogo';

const Navbar = ({ navigation, locale, setLocale }) => {
    i18n.locale = locale;

    const switchLanguage = (language) => {
        setLocale(language);
    }

    return (
        <View style={styles.parentNav}>
            <BridgeLogo />
            <TouchableOpacity onPress={() => switchLanguage('en')}>
                <CountryFlag isoCode="gb" size={15} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => switchLanguage('ph')}>
                <CountryFlag isoCode="ph" size={15} />
            </TouchableOpacity>
            <View style={styles.navButtons}>
                <TouchableOpacity>
                    <Text style={styles.textStyle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Beta', { locale: locale })}>
                    <Text style={styles.btnTextStyle}>{i18n.t('betaApply')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

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

export default Navbar;