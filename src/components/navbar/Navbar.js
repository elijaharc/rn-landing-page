import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from "react-native-country-flag";
import i18n from 'i18n-js';
import BridgeLogo from '../../../assets/svg/BridgeLogo';
import styles from './Styles';

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

export default Navbar;