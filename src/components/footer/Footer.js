import React from "react";
import { View, Text } from "react-native";
import i18n from "i18n-js";
import styles from "./Styles";
import BridgeGreyIcon from "../../../assets/svg/BridgeGreyIcon";
import { connect } from "react-redux";

const Footer = ({ locale }) => {
    i18n.locale = locale;

    return (
        <View style={styles.container}>
            <View style={styles.curved}>
            </View>
            <View>
                <BridgeGreyIcon />
            </View>
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

const mapStateToProps = (state) => (
    // instead of state as props, we can destructure it too: {selectedLocale, user}
    // If we didn't destructure, we could use 'state' as params
    { locale: state.selectedLocale.locale }
);

const connectComponent = connect(mapStateToProps);

export default connectComponent(Footer);