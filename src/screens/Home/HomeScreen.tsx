import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SHADOW, RADIUS } from '../../theme/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeCard from '../../component/HomeCard/HomeCard';
import CountCard from '../../component/CountCard/CountCard';

export default function Home({ navigation }: any) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Amalka Rosa</Text>

                <View style={styles.locationBar}>
                    <Icon name="map-marker" size={20} color={COLORS.white} />
                    <Text style={styles.locationText}>Colombo 5, Sri Lanka</Text>
                    <TouchableOpacity style={{ marginLeft: 'auto' }}>
                        <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Change ›</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.form}>
                <HomeCard
                    icon=""
                    label="Create a New Service Request"
                    subLabel="Tell us what you need help with"
                    screen="NewRequestScreen"
                    navigation={navigation}
                />

                <View style={styles.countCardContainer}>
                    <CountCard
                        label="Pending Requests"
                        subLabel="03"
                    />

                    <CountCard
                        label="Active Requests"
                        subLabel="03"
                    />


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    header: {
        backgroundColor: COLORS.primary,
        paddingTop: 25,
        paddingBottom: 20,
        paddingHorizontal: 24,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    countCardContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    backBtn: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 20,
        color: COLORS.white,
        ...FONTS.semibold,
        marginBottom: 5,
    },
    locationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: RADIUS.sm,
        padding: 10,
        marginBottom: 10,
    },
    locationText: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.9)',
        ...FONTS.medium
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.md,
        ...SHADOW.sm,
    },
    form: {
        paddingLeft: 24,
        paddingRight: 24,
        gap: 2,
    },
    categoryTitle: {
        marginTop: 10,
        fontSize: 18,
        ...FONTS.semibold,
        color: COLORS.gray800,
        marginBottom: 12,
    },
    serviceList: {
        gap: 12,
    },
    serviceItem: {
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.md,
        ...SHADOW.sm,
        overflow: 'hidden',
    },
    serviceImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    serviceTitle: {
        fontSize: 16,
        ...FONTS.semibold,
        color: COLORS.gray800,
        marginBottom: 4,
    },
    servicePrice: {
        fontSize: 14,
        ...FONTS.medium,
        color: COLORS.primary,
    },
});
