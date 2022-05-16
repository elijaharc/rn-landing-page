import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles";

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

export default EmailBar;