import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.parentNav}>
            <Text style={styles.logo}>BRIDGE</Text>
            <View style={styles.navButtons}>
                <TouchableOpacity>
                    <Text style={styles.textStyle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnTextStyle}>Apply for Beta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parentNav: {
        height: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    navButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: 180,
        justifyContent: 'space-between',
    },
    btnTextStyle: {
        color: 'white',
        paddingHorizontal: 12,
        paddingVertical: 9,
        fontSize: 13,
        fontWeight: 'bold',
    },
    textStyle: {
        color: '#0038ff',
        fontWeight: '600',
    },
    logo: {
        margin: 10,
        letterSpacing: 2,
        fontWeight: '500',
    },
    btnStyle: {
        backgroundColor: '#0038ff',
        borderRadius: 50,
        marginRight: 1,
        paddingHorizontal: 3,
    }
});

export default Navbar;