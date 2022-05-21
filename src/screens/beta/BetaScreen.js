import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import EmailBar from "../../components/emailBar/EmailBar";
import WaitlistService from "../../api/waitlist/waitlist.service";
import i18n from "i18n-js";
import styles from "./Styles";
import { Context as LocaleContext } from "../../context/LocaleContext";
import { Context as UserContext } from '../../context/UserContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const BetaScreen = () => {
    const localeState = useContext(LocaleContext);
    const userState = useContext(UserContext);
    const saveLastUser = userState.saveLastUser;
    const lastRegisteredUser = userState.state;
    const [email, setEmail] = useState("");
    i18n.locale = localeState.state.locale;

    const handleSubmit = async () => {
        try {
            const response = await WaitlistService.postWaitlist(email);
            saveLastUser(response.data.email, response.data.priority);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {i18n.t('interest')}
            </Text>
            <Text style={styles.textStyle}>
                {i18n.t('enterEmail')}
            </Text>
            <EmailBar
                email={email}
                onEmailChange={setEmail}
                onEmailSubmit={handleSubmit} />
            <Text style={styles.textStyle}>
                {lastRegisteredUser.email !== "" || lastRegisteredUser.priority !== "" ? `${i18n.t('congratulations')}` : null}
            </Text>
            <Text style={styles.waitlistStyle}>
                {lastRegisteredUser.email !== "" || lastRegisteredUser.priority !== "" ? `${i18n.t('position')} ${lastRegisteredUser.priority}` : null}
            </Text>
        </View>
    );
}

export default BetaScreen;