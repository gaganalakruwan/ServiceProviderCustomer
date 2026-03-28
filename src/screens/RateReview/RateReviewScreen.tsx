import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    TextInput, StatusBar, ScrollView,
} from 'react-native';
import { COLORS, RADIUS, FONTS, SHADOW } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../component/AppButton/AppButton';

export default function RateReviewScreen({ navigation, route }) {
    const order = route?.params?.order ?? { service: 'AC Repair & Service', technician: 'Kamal Perera' };
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const LABELS = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

    if (submitted) {
        return (
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: 32 }]}>
                <Text style={{ fontSize: 64, marginBottom: 16 }}>🎉</Text>
                <Text style={styles.thankTitle}>Thank You!</Text>
                <Text style={styles.thankSub}>Your review helps us improve our service quality.</Text>
                <TouchableOpacity
                    style={[styles.submitBtn, { marginTop: 24 }]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.submitBtnText}>Back to Home</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Rate & Review</Text>
                <Text style={styles.headerSub}>How was your experience?</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {/* Service Info */}
                <View style={styles.serviceCard}>
                    <Text style={styles.serviceEmoji}>⭐</Text>
                    <Text style={styles.serviceName}>{order.service}</Text>
                    <Text style={styles.techName}>Technician: {order.technician ?? 'Kamal Perera'}</Text>
                </View>

                {/* Star Rating */}
                <View style={styles.ratingSection}>
                    <Text style={styles.ratingLabel}>Tap to rate</Text>
                    <View style={styles.starsRow}>
                        {[1, 2, 3, 4, 5].map(i => (
                            <TouchableOpacity key={i} onPress={() => setRating(i)} style={{ padding: 6 }}>
                                <Text style={[styles.star, { color: i <= rating ? COLORS.warning : COLORS.gray200 }]}>★</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {rating > 0 && (
                        <Text style={styles.ratingLabelText}>{LABELS[rating]}</Text>
                    )}
                </View>

                {/* Quick Tags */}
                <Text style={styles.sectionLabel}>What did you like?</Text>
                <View style={styles.tagsRow}>
                    {['Professional', 'On Time', 'Clean Work', 'Good Price', 'Friendly', 'Quality Parts'].map(tag => (
                        <TouchableOpacity key={tag} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Review Text */}
                <Text style={[styles.sectionLabel, { marginTop: 18 }]}>Write a review (optional)</Text>
                <TextInput
                    style={styles.reviewInput}
                    placeholder="Share your experience with others..."
                    placeholderTextColor={COLORS.gray400}
                    value={review}
                    onChangeText={setReview}
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                />

                {/* Buttons */}
                <AppButton
                    title="Submit Review"
                    onPress={() => setSubmitted(true)}
                    style={styles.submitBtn}
                    textStyle={styles.submitBtnText}
                />

                <AppButton
                    title="Skip for now"
                    onPress={() => navigation.navigate('Home')}
                    style={styles.skipBtn}
                    textStyle={styles.skipBtnText}
                />

                <View style={{ height: 20 }} />
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
        paddingHorizontal: 16,
        paddingVertical: 18,
        gap: 4,
        alignItems: 'center'
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
    content: {
        padding: 20
    },
    serviceCard: {
        backgroundColor: COLORS.gray50,
        borderRadius: RADIUS.lg,
        padding: 20,
        alignItems: 'center',
        marginBottom: 24,
        borderWidth: 1,
        borderColor: COLORS.gray200,
    },
    serviceEmoji: {
        fontSize: 40,
        marginBottom: 8
    },
    serviceName: {
        fontSize: 16,
        ...FONTS.semibold,
        color: COLORS.gray800
    },
    techName: {
        fontSize: 12,
        color: COLORS.gray400,
        marginTop: 4
    },
    ratingSection: {
        alignItems: 'center',
        marginBottom: 24
    },
    ratingLabel: {
        fontSize: 13,
        color: COLORS.gray400,
        marginBottom: 12
    },
    starsRow: {
        flexDirection: 'row',
        gap: 4
    },
    star: {
        fontSize: 42
    },
    ratingLabelText: {
        fontSize: 15,
        ...FONTS.semibold,
        color: COLORS.primary,
        marginTop: 10
    },
    sectionLabel: {
        fontSize: 13,
        ...FONTS.semibold,
        color: COLORS.gray700,
        marginBottom: 10
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    tag: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: RADIUS.full,
        borderWidth: 1,
        borderColor: COLORS.gray200,
        backgroundColor: COLORS.gray50,
    },
    tagText: {
        fontSize: 12,
        color: COLORS.gray600,
        ...FONTS.medium
    },
    reviewInput: {
        backgroundColor: COLORS.gray50,
        borderWidth: 1,
        borderColor: COLORS.gray200,
        borderRadius: RADIUS.md,
        padding: 14,
        fontSize: 13,
        color: COLORS.black,
        minHeight: 100,
        marginBottom: 20,
    },
    submitBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: RADIUS.md,
        padding: 15,
        alignItems: 'center',
        ...SHADOW.sm,
    },
    submitBtnText: {
        color: COLORS.white,
        fontSize: 15,
        ...FONTS.semibold
    },
    skipBtn: {
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8
    },
    skipBtnText: {
        color: COLORS.gray400,
        fontSize: 13
    },
    thankTitle: {
        fontSize: 24,
        ...FONTS.bold,
        color: COLORS.gray800,
        textAlign: 'center'
    },
    thankSub: {
        fontSize: 14,
        color: COLORS.gray400,
        textAlign: 'center',
        lineHeight: 22,
        marginTop: 8
    },
});
