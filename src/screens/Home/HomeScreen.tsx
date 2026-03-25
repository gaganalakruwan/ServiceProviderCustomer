import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SHADOW, RADIUS } from '../../theme/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppTextInput from '../../component/AppTextInput/AppTextInput';
import { CategoryChipRow } from '../../component/CategoryCard/CategoryCard';
import ServiceCard from '../../component/ServiceCard/ServiceCard';

const CATEGORIES = [
    { id: 'all', label: 'All'},
    { id: 'repair', label: 'Repair'},
    { id: 'cleaning', label: 'Cleaning'},
    { id: 'electric', label: 'Electric'},
    { id: 'plumbing', label: 'Plumbing'},
    { id: 'painting', label: 'Painting' },
];

const SERVICES = [
    { id: 1, title: 'AC Repair', category: 'repair', price: 'Rs 1500', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd314?w=400' },
    { id: 2, title: 'Deep Cleaning', category: 'cleaning', price: 'Rs 2500', image: 'https://images.unsplash.com/photo-1581574020254-1e954f2d79af?w=400' },
    { id: 3, title: 'Fan Repair', category: 'electric', price: 'Rs 500', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd314?w=400' },
    { id: 4, title: 'Pipe Leak Fix', category: 'plumbing', price: 'Rs 1200', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd314?w=400' },
    { id: 5, title: 'Wall Painting', category: 'painting', price: 'Rs 5000', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd314?w=400' },
];

export default function Home({ navigation }: any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredServices = activeCategory === 'all'
        ? SERVICES
        : SERVICES.filter(s => s.category === activeCategory);

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

                <AppTextInput
                    placeholder="Search services..."
                    icon={
                        <Icon name="search" size={20} color={COLORS.gray400} />
                    }
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={styles.searchBar}
                />
            </View>

            <ScrollView contentContainerStyle={styles.form}>
                
                {/* Categories */}
                <Text style={styles.categoryTitle}>Categories</Text>
                <CategoryChipRow
                    items={CATEGORIES}
                    activeId={activeCategory}
                    onSelect={setActiveCategory}
                />

                {/* Services */}
                <Text style={styles.categoryTitle}>Services</Text>
                <ServiceCard
                    name="AC Repair"
                    price="Rs. 2,500"
                    image="https://images.unsplash.com/photo-1570129477492-45c003edd314?w=400"
                    bgColor="#E1F5EE"
                    rating={4.2}
                    reviews={128}
                    onPress={() => navigation.navigate('ServiceDetail', { service: SERVICES[0] })}
                    onBookPress={() => navigation.navigate('Booking')}
                />

                <ServiceCard
                    name="Deep Cleaning"
                    price="Rs. 5,500"
                    image="https://images.unsplash.com/photo-1570129477492-45c003edd314?w=400"
                    bgColor="#E1F5EE"
                    rating={3.3}
                    reviews={228}
                    onPress={() => navigation.navigate('ServiceDetail', { service: SERVICES[1] })}
                    onBookPress={() => navigation.navigate('Booking')}
                />

                <ServiceCard
                    name="Fan Repair"
                    price="Rs. 500"
                    emoji="❄️"
                    bgColor="#E1F5EE"
                    rating={3.3}
                    reviews={228}
                    onPress={() => navigation.navigate('ServiceDetail', { service: SERVICES[2] })}
                    onBookPress={() => navigation.navigate('Booking')}
                />

                <ServiceCard
                    name="Pipe Leak Fix"
                    price="Rs. 1,200"
                    emoji="❄️"
                    bgColor="#E1F5EE"
                    rating={3.3}
                    reviews={228}
                    onPress={() => navigation.navigate('ServiceDetail', { service: SERVICES[3] })}
                    onBookPress={() => navigation.navigate('Booking')}
                />

                <ServiceCard
                    name="Wall Painting"
                    price="Rs. 5,000"
                    emoji="❄️"
                    bgColor="#E1F5EE"
                    rating={3.3}
                    reviews={228}
                    onPress={() => navigation.navigate('ServiceDetail', { service: SERVICES[4] })}
                    onBookPress={() => navigation.navigate('Booking')}
                />
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
