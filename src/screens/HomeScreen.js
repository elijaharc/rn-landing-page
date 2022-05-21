import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Mission from "../components/mission/Mission";
import Footer from "../components/footer/Footer";
import { en, ph } from '../../i18n/supportedLanguages';
import i18n from 'i18n-js';
i18n.fallbacks = true;
i18n.translations = { en, ph };

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Navbar
                navigation={navigation} />
            <ScrollView>
                <Hero navigation={navigation} />
                <Mission navigation={navigation} />
                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;