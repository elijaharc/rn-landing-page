import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";

const Review = ({ text, color, icon }) => {
    return (
        <View style={{
            backgroundColor: `${color}`,
            borderRadius: 30,
            marginTop: 15,
            height: 50,
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
        }}>
            <View style={styles.iconStyle}>
                {typeof icon === 'number' ? <Image source={icon} style={{ width: 30, height: 30 }} /> : icon}
            </View>
            <Text style={styles.textStyles}>{text}</Text>
        </View >
    );
}

export default Review;