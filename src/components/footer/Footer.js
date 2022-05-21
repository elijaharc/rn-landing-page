import React, { useContext } from "react";
import { View, Text } from "react-native";
import i18n from "i18n-js";
import styles from "./Styles";
import BridgeGreyIcon from "../../../assets/svg/BridgeGreyIcon";
import { Context as LocaleContext } from "../../context/LocaleContext";

const Footer = () => {
    const { state } = useContext(LocaleContext)
    i18n.locale = state.locale;

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

export default Footer;