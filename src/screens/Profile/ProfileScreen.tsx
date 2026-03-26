import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, StatusBar, Alert,
} from 'react-native';
import { COLORS, RADIUS, FONTS, SHADOW } from '../../theme/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../component/AppHeader/AppHeader';
import Icon from 'react-native-vector-icons/Feather';
import AppButton from '../../component/AppButton/AppButton';

const MENU_ITEMS = [
    { icon: '✏️', label: 'Edit Profile', screen: null },
    { icon: '📋', label: 'My Orders', screen: 'OrdersTab' },
    { icon: '🔔', label: 'Notifications', screen: null },
    { icon: '❓', label: 'Help & Support', screen: null },
    { icon: '🔒', label: 'Privacy Policy', screen: null },
    { icon: '⚙️', label: 'Settings', screen: null },
];

export default function ProfileScreen({ navigation }) {
    const handleLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Logout', style: 'destructive', onPress: () => navigation.navigate('SignIn') },
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

            {/* Header */}
            <AppHeader
                title="Your Profile"
            />

            {/* ScrollView */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                {/* Avatar & Name */}
                <View style={styles.profileCard}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>RS</Text>
                    </View>
                    <Text style={styles.userName}>Ruwan Silva</Text>
                    <Text style={styles.userEmail}>ruwan.silva@email.com</Text>
                    <View style={styles.statRow}>
                        <View style={styles.stat}>
                            <Text style={styles.statNum}>8</Text>
                            <Text style={styles.statLabel}>Total Orders</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.stat}>
                            <Text style={styles.statNum}>6</Text>
                            <Text style={styles.statLabel}>Completed</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.stat}>
                            <Text style={styles.statNum}>4.6</Text>
                            <Text style={styles.statLabel}>Avg Rating</Text>
                        </View>
                    </View>
                </View>

                {/* Info */}
                <View style={styles.infoCard}>
                    <Text style={styles.cardTitle}>Personal Info</Text>
                    {[
                        { label: 'Name', value: 'Ruwan Silva' },
                        { label: 'Phone', value: '+94 77 123 4567' },
                        { label: 'Address', value: '12 Galle Road, Colombo 5' },
                        { label: 'Member Since', value: 'January 2025' },
                    ].map(({ label, value }) => (
                        <View key={label} style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{label}</Text>
                            <Text style={styles.infoValue}>{value}</Text>
                        </View>
                    ))}
                </View>

                {/* Menu */}
                <View style={styles.menuCard}>
                    {MENU_ITEMS.map(({ icon, label, screen }, i) => (
                        <TouchableOpacity
                            key={label}
                            style={[styles.menuRow, i < MENU_ITEMS.length - 1 && styles.menuRowBorder]}
                            onPress={() => screen && navigation.navigate(screen)}
                        >
                            <Text style={styles.menuIcon}>{icon}</Text>
                            <Text style={styles.menuLabel}>{label}</Text>
                            <Text style={styles.menuArrow}>
                                <Icon name="chevron-right" size={20} color={COLORS.gray400} />
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Logout */}
                <AppButton
                    title="Logout"
                    onPress={handleLogout}
                    style={[styles.logoutBtn, { marginHorizontal: 16, marginTop: 8 }]}
                    textStyle={styles.logoutText}
                    iconName="log-out"
                    iconSize={20}
                    iconColor={COLORS.danger}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray50
    },
    header: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    headerTitle: {
        fontSize: 20,
        ...FONTS.semibold,
        color: COLORS.white
    },
    profileCard: {
        backgroundColor: COLORS.primary,
        paddingBottom: 24,
        paddingTop: 20,
        alignItems: 'center',
        gap: 4,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: 'rgba(255,255,255,0.25)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.4)',
    },
    avatarText: {
        fontSize: 26,
        ...FONTS.semibold,
        color: COLORS.white
    },
    userName: {
        fontSize: 20,
        ...FONTS.semibold,
        color: COLORS.white
    },
    userEmail: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.75)'
    },
    statRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: RADIUS.md,
        padding: 14,
        marginTop: 14,
        gap: 0,
    },
    stat: {
        flex: 1,
        alignItems: 'center'
    },
    statNum: {
        fontSize: 20,
        ...FONTS.bold,
        color: COLORS.white
    },
    statLabel: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.75)',
        marginTop: 2
    },
    statDivider: {
        width: 1,
        height: 32,
        backgroundColor: 'rgba(255,255,255,0.25)'
    },
    infoCard: {
        backgroundColor: COLORS.white,
        margin: 16,
        marginBottom: 8,
        borderRadius: RADIUS.lg,
        paddingHorizontal: 16,
        ...SHADOW.sm,
    },
    cardTitle: {
        fontSize: 14,
        ...FONTS.semibold,
        color: COLORS.gray800,
        paddingVertical: 14,
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.gray200
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.gray200,
    },
    infoLabel: {
        fontSize: 12,
        color: COLORS.gray400
    },
    infoValue: {
        fontSize: 13,
        ...FONTS.medium,
        color: COLORS.gray800
    },
    menuCard: {
        backgroundColor: COLORS.white,
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: RADIUS.lg,
        paddingHorizontal: 16,
        ...SHADOW.sm,
    },
    menuRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        gap: 12,
    },
    menuRowBorder: {
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.gray200
    },
    menuIcon: {
        fontSize: 18,
        width: 24,
        textAlign: 'center'
    },
    menuLabel: {
        flex: 1,
        fontSize: 14,
        color: COLORS.gray700
    },
    menuArrow: {
        fontSize: 18,
        color: COLORS.gray400
    },
    logoutBtn: {
        borderWidth: 1.5,
        borderColor: '#E24B4A',
        borderRadius: RADIUS.md,
        paddingVertical: 14,
        alignItems: 'center',
    },
    logoutText: {
        color: '#E24B4A',
        fontSize: 14,
        ...FONTS.semibold
    },
});
