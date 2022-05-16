import React from "react";
import { View, Text } from "react-native";
import i18n from "i18n-js";
import styles from "./Styles";

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

export default Footer;