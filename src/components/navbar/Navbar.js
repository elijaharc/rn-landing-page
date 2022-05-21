import React from 'react';
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from "react-native-country-flag";
import i18n from 'i18n-js';
import BridgeLogo from '../../../assets/svg/BridgeLogo';
import styles from './Styles';
import { changeLanguage as changeLanguageAction } from '../../redux/Actions';

const Navbar = ({ navigation, locale, changeLanguage }) => {
    i18n.locale = locale;

    return (
        <View style={styles.parentNav}>
            <BridgeLogo />
            <TouchableOpacity onPress={() => changeLanguage('en')}>
                <CountryFlag isoCode="gb" size={15} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage('ph')}>
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

const mapStateToProps = ({ selectedLocale }) => (
    // instead of state as props, we can destructure it too: {selectedLocale, user}
    // If we didn't destructure, we could use 'state' as params
    { locale: selectedLocale.locale }
);

const mapDispatchToProps = (dispatch) => ({
    changeLanguage: (locale) => dispatch(changeLanguageAction(locale)),
});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Navbar);