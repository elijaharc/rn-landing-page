import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const EmailBar = ({ email, onEmailChange, onEmailSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Enter your email address"
                value={email}
                onChangeText={onEmailChange}
                onEndEditing={onEmailSubmit} />
        </View >
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 30,
        height: 50,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    inputStyle: {
        fontSize: 16,
    }
});

export default EmailBar;