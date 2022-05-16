import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import EmailBar from "../components/EmailBar";
import waitlist from "../api/waitlist";

const BetaScreen = () => {
    const [email, setEmail] = useState("");
    const [apiResponse, setApiResponse] = useState({});
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
            setApiResponse(response.data);
            console.log(apiResponse);
        } catch (err) {
            console.log(err);
        }
    }

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
                onEmailChange={setEmail}
                onEmailSubmit={handleSubmit} />
            <Text style={styles.textStyle}>
                {apiResponse.current_priority != undefined ? "Congratulations, you're now in the waitlist!" : null}
            </Text>
            <Text style={styles.waitlistStyle}>
                {apiResponse.current_priority != undefined ? `Your waiting list position is: ${apiResponse.current_priority}` : null}
            </Text>
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
    waitlistStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
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