import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import i18n from "i18n-js";
import styles from "./Styles";
import BridgeIcon from "../../../assets/svg/BridgeIcon";
import { connect } from "react-redux";

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
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Beta')}>
                <Text style={styles.btnTextStyle}>
                    {i18n.t('betaApply')}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => (
    // instead of state as props, we can destructure it too: {selectedLocale, user}
    // If we didn't destructure, we could use 'state' as params
    { locale: state.selectedLocale.locale }
);

const connectComponent = connect(mapStateToProps);

export default connectComponent(Mission);