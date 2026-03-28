import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    FlatList, StatusBar,
} from 'react-native';
import { COLORS, RADIUS, FONTS, SHADOW } from '../../theme/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../component/AppHeader/AppHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

const ORDERS = [
    {
        id: 'ORD-001', service: 'AC Repair & Service', date: 'Mar 16, 2026', time: '9:00 AM',
        status: 'Active', badge: 'active', technician: 'Kamal Perera', price: 'Rs. 2,500', emoji: '❄️',
    },
    {
        id: 'ORD-002', service: 'Plumbing Service', date: 'Mar 10, 2026', time: '2:00 PM',
        status: 'Completed', badge: 'done', technician: 'Nuwan Udaya', price: 'Rs. 1,800', emoji: '🚿',
    },
    {
        id: 'ORD-003', service: 'Electrical Work', date: 'Mar 8, 2026', time: '11:00 AM',
        status: 'Pending', badge: 'pending', technician: 'Awaiting', price: 'Rs. 2,000', emoji: '⚡',
    },
    {
        id: 'ORD-004', service: 'Deep Cleaning', date: 'Feb 28, 2026', time: '10:00 AM',
        status: 'Completed', badge: 'done', technician: 'Chatura S.', price: 'Rs. 3,200', emoji: '🧹',
    },
];

const BADGE = {
    active: { bg: '#E1F5EE', color: '#0F6E56', label: 'Active' },
    done: { bg: '#EAF3DE', color: '#3B6D11', label: 'Completed' },
    pending: { bg: '#FAEEDA', color: '#854F0B', label: 'Pending' },
};

const FILTERS = ['All', 'Active', 'Pending', 'Completed'];

export default function MyOrdersScreen({ navigation }) {
    const [filter, setFilter] = useState('All');

    const filtered = ORDERS.filter(o =>
        filter === 'All' || o.status === filter
    );

    const renderItem = ({ item }) => {
        const badge = BADGE[item.badge];
        return (
            <View style={styles.card}>
                <View style={styles.cardTop}>
                    <View style={styles.emojiBox}>
                        <Text style={{ fontSize: 22 }}>{item.emoji}</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Text style={styles.svcName}>{item.service}</Text>
                            <View style={[styles.badge, { backgroundColor: badge.bg }]}>
                                <Text style={[styles.badgeText, { color: badge.color }]}>{badge.label}</Text>
                            </View>
                        </View>
                        <Text style={styles.orderId}>{item.id}</Text>
                        <Text style={styles.meta}>
                            <Icon name="calendar" size={12} color={COLORS.gray400} /> {item.date} · {item.time}
                        </Text>
                        <Text style={styles.meta}>
                            <Icon name="user" size={12} color={COLORS.gray400} /> {item.technician}
                        </Text>
                    </View>
                </View>
                <View style={styles.cardBottom}>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderDetailsScreen', { order: item })}
                    >
                        <Text style={styles.detailBtnText}>View Details →</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

            {/* Header */}
            <AppHeader
                title="My Orders"
                subtitle='Track your service requests'
            />

            {/* Filter tabs */}
            <View style={styles.filterRow}>
                {FILTERS.map(f => (
                    <TouchableOpacity
                        key={f}
                        style={[styles.filterTab, filter === f && styles.filterTabActive]}
                        onPress={() => setFilter(f)}
                    >
                        <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>{f}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={filtered}
                keyExtractor={i => i.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 30 }}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center', marginTop: 60 }}>
                        <Text style={{ fontSize: 40 }}>📋</Text>
                        <Text style={{ fontSize: 14, color: COLORS.gray400, marginTop: 12 }}>No orders found</Text>
                    </View>
                }
            />
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
        paddingTop: 14,
        paddingBottom: 16,
        gap: 4
    },
    headerTitle: {
        fontSize: 20,
        ...FONTS.semibold,
        color: COLORS.white
    },
    headerSub: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.75)'
    },
    filterRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray200
    },
    filterTab: {
        flex: 1,
        paddingVertical: 7,
        borderRadius: RADIUS.full,
        alignItems: 'center',
        backgroundColor: COLORS.gray100,
    },
    filterTabActive: {
        backgroundColor: COLORS.primary
    },
    filterText: {
        fontSize: 11,
        ...FONTS.medium,
        color: COLORS.gray600
    },
    filterTextActive: {
        color: COLORS.white
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.lg,
        padding: 14,
        ...SHADOW.sm,
    },
    cardTop: {
        flexDirection: 'row',
        marginBottom: 12
    },
    emojiBox: {
        width: 48,
        height: 48,
        borderRadius: RADIUS.md,
        backgroundColor: COLORS.primaryLight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    svcName: {
        fontSize: 14,
        ...FONTS.semibold,
        color: COLORS.gray800,
        flex: 1,
        marginRight: 6
    },
    orderId: {
        fontSize: 10,
        color: COLORS.gray400,
        marginTop: 2
    },
    meta: {
        fontSize: 11,
        color: COLORS.gray400,
        marginTop: 3
    },
    badge: {
        paddingHorizontal: 9,
        paddingVertical: 4,
        borderRadius: RADIUS.full
    },
    badgeText: {
        fontSize: 10,
        ...FONTS.medium
    },
    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        borderTopWidth: 0.5,
        borderTopColor: COLORS.gray200,
    },
    price: {
        fontSize: 15,
        ...FONTS.bold,
        color: COLORS.primary
    },
    detailBtnText: {
        fontSize: 13,
        color: COLORS.primary,
        ...FONTS.medium
    },
});
