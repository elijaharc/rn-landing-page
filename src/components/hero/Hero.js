import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";
import i18n from "i18n-js";
import MiniBridgeLogo from "../../svg/MiniBridgeLogo";

const Hero = ({ navigation, locale }) => {
    i18n.locale = locale;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {i18n.t('collaborate')}
            </Text>
            <Text style={styles.textStyle}>
                {i18n.t('connect')}
            </Text>
            <View style={styles.miniLogo}>
                <MiniBridgeLogo />
            </View>
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Beta', { locale: locale })}>
                <Text style={styles.btnTextStyle}>
                    {i18n.t('betaApply')}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Hero;