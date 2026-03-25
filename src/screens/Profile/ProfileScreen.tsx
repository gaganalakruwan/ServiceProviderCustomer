import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.subtitle}>Manage your account and preferences.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        ...FONTS.semibold,
        color: COLORS.gray800,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.gray400,
    }
});
