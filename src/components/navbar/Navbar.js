import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from "react-native-country-flag";
import i18n from 'i18n-js';
import BridgeLogo from '../../../assets/svg/BridgeLogo';
import styles from './Styles';
import { Context as LocaleContext } from '../../context/LocaleContext';

const Navbar = ({ navigation }) => {
    const { state, changeLocale } = useContext(LocaleContext);
    i18n.locale = state.locale;

    return (
        <View style={styles.parentNav}>
            <BridgeLogo />
            <TouchableOpacity onPress={() => changeLocale('en')}>
                <CountryFlag isoCode="gb" size={15} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLocale('ph')}>
                <CountryFlag isoCode="ph" size={15} />
            </TouchableOpacity>
            <View style={styles.navButtons}>
                <TouchableOpacity>
                    <Text style={styles.textStyle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Beta')}>
                    <Text style={styles.btnTextStyle}>{i18n.t('betaApply')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Navbar;