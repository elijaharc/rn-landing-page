import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import EmailBar from "../components/EmailBar";

const BetaScreen = () => {
    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Thanks for your interest in our app!
            </Text>
            <Text style={styles.textStyle}>
                Enter your email address to secure a slot in our waitlist for the beta.
            </Text>
            <EmailBar
                email={email}
                onEmailChange={newEmail => setEmail(newEmail)}
                onEmailSubmit={() => console.log('Email submitted')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06f',
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        paddingHorizontal: 10,
        marginTop: 80,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        paddingHorizontal: 40,
        marginTop: 30,
        textAlign: 'center',
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginTop: 30,
    }
});

export default BetaScreen;