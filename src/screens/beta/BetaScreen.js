import React, { useState } from "react";
import { View, Text } from "react-native";
import EmailBar from "../../components/emailBar/EmailBar";
import WaitlistService from "../../api/waitlist/waitlist.service";
import i18n from "i18n-js";
import styles from "./Styles";
import { connect } from "react-redux";
import { saveUser as saveUserAction } from "../../redux/Actions";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const BetaScreen = ({ user, locale, saveUser }) => {
    const [email, setEmail] = useState("");
    i18n.locale = locale;

    const handleSubmit = async () => {
        try {
            const response = await WaitlistService.postWaitlist(email);
            saveUser(response.data.email, response.data.priority);
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
                {user.email !== "" || user.priority !== "" ? `${i18n.t('congratulations')}` : null}
            </Text>
            <Text style={styles.waitlistStyle}>
                {user.email !== "" || user.priority !== "" ? `${i18n.t('position')} ${user.priority}` : null}
            </Text>
        </View>
    );
}

const mapStateToProps = (state) => (
    // instead of state as props, we can destructure it too: {selectedLocale, user}
    // If we didn't destructure, we could use 'state' as params
    { locale: state.selectedLocale.locale, user: state.user }
);

const mapDispatchToProps = (dispatch) => ({
    saveUser: (email, priority) => dispatch(saveUserAction(email, priority)),
});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(BetaScreen);