import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import i18n from "i18n-js";
import styles from "./Styles";
import BridgeIcon from "../../../assets/svg/BridgeIcon";

const Mission = ({ navigation, locale }) => {
    i18n.locale = locale;

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <BridgeIcon />
            </View>
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

export default Mission;