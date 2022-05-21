import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";
import i18n from "i18n-js";
import Review from "../reviews/Review";
import StackedImage from "../stackedImage/StackedImage";
import MiniBridgeLogo from "../../../assets/svg/MiniBridgeLogo";
import CustomerLogo from "../../components/customerLogo/CustomerLogo";
import { connect } from "react-redux";

const Hero = ({ navigation, locale }) => {
    i18n.locale = locale;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {i18n.t('collaborate')}
            </Text>
            <Text style={styles.textStyle}>
                {i18n.t('connect')}
            </Text>
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Beta')}>
                <Text style={styles.btnTextStyle}>
                    {i18n.t('betaApply')}
                </Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>
                {i18n.t('join')}
            </Text>
            <StackedImage />
            <Review icon={<MiniBridgeLogo />} text={"3 intros are ready to review and forward"} color={'#568fff'} />
            <Review icon={require('../../../assets/bridgeSvg1.png')} text={"John is able to offer an intro to Sequoia"} color={'#5ac572'} />
            <Review icon={require('../../../assets/bridgeSvg2.png')} text={"Amy requested a forwardable from you"} color={'#a07fff'} />
            <Review icon={require('../../../assets/bridgeSvg3.png')} text={"Kate said the intro to Jeni was great"} color={'#5ac572'} />
            <Review icon={<MiniBridgeLogo />} text={"Lida and Dan are now connected 🎉"} color={'#568fff'} />
            <CustomerLogo />
        </View >
    );
}

const mapStateToProps = (state) => (
    // instead of state as props, we can destructure it too: {selectedLocale, user}
    // If we didn't destructure, we could use 'state' as params
    { locale: state.selectedLocale.locale }
);

const connectComponent = connect(mapStateToProps);

export default connectComponent(Hero);