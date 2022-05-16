import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles";
import Dropbox from "../../../assets/svg/Dropbox"
import Mercury from "../../../assets/svg/Mercury"
import Berkeley from "../../../assets/svg/Berkeley"
import Techstars from "../../../assets/svg/Techstars"
import SignalFire from "../../../assets/svg/SignalFire"

const CustomerLogo = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Dropbox />
            <Mercury />
            <Berkeley />
            <Techstars />
            <SignalFire />
        </View >
    );
}

export default CustomerLogo;