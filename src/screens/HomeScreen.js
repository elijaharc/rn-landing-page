import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Navbar navigation={navigation} />
            <ScrollView>
                <Hero navigation={navigation} />
                <Mission navigation={navigation} />
                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default HomeScreen;