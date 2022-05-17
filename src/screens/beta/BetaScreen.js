import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import EmailBar from "../../components/emailBar/EmailBar";
import waitlist from "../../api/waitlist";
import i18n from "i18n-js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./Styles";

const BetaScreen = ({ navigation }) => {
    const [lastRegisteredUser, setLastRegisteredUser] = useState({});
    const [lastRegisteredUserFetched, setLastRegisteredUserFetched] = useState(false);
    const [email, setEmail] = useState("");
    i18n.locale = navigation.state.params.locale;

    useEffect(() => {
        if (!lastRegisteredUserFetched) {
            getCurrentEmail();
        }
    }, [lastRegisteredUser]);

    const getCurrentEmail = async () => {
        try {
            const value = await AsyncStorage.getItem('lastRegisteredUser');
            setLastRegisteredUser(JSON.parse(value));
            setLastRegisteredUserFetched(true);
        } catch (err) {
            console.log(err)
        }
    }

    const params = JSON.stringify({
        "api_key": "JTFW8O",
        email,
        "referral_link": "www.mywebsite.com?&ref_id=1234"
    });

    const handleSubmit = async () => {
        try {
            const response = await waitlist.post("/submit", params, {
                "headers": {
                    "content-type": "application/json",
                },
            });
            setLastRegisteredUser(response.data);
            await AsyncStorage.setItem('lastRegisteredUser', JSON.stringify({ lastRegisteredEmail: response.data.registered_email, priority: response.data.current_priority }));
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
                {lastRegisteredUser !== null || lastRegisteredUser !== undefined ? `${i18n.t('congratulations')}` : null}
            </Text>
            <Text style={styles.waitlistStyle}>
                {lastRegisteredUser !== null || lastRegisteredUser !== undefined ? `${i18n.t('position')} ${lastRegisteredUser.priority}` : null}
            </Text>
        </View>
    );
}

export default BetaScreen;