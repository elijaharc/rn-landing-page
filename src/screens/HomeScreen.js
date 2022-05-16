import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Mission from "../components/mission/Mission";
import Footer from "../components/footer/Footer";
import i18n from 'i18n-js';
import { en, ph } from '../../i18n/supportedLanguages';
i18n.fallbacks = true;
i18n.translations = { en, ph };

const HomeScreen = ({ navigation }) => {
    const [locale, setLocale] = useState("en");

    i18n.locale = locale;

    return (
        <SafeAreaView>
            <Navbar
                navigation={navigation}
                locale={locale}
                setLocale={setLocale} />
            <ScrollView>
                <Hero navigation={navigation}
                    locale={locale} />
                <Mission navigation={navigation}
                    locale={locale} />
                <Footer locale={locale} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default HomeScreen;