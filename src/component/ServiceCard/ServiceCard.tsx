import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS, SHADOW } from '../../theme/index';
import AppButton from '../../component/AppButton/AppButton';
import StarRating from '../../component/StarRating/StarRating';

interface ServiceCardProps {
    name: string;
    price: string;
    description: string;
    emoji: string;
    bgColor: string;
    rating: number;
    reviews: number;
    onPress: () => void;
    onBookPress: () => void;
    showButton: boolean;
    buttonLabel: string;
    style: object;
}

export default function ServiceCard({ 
    name,
    price,
    description,
    emoji = '🔧',
    bgColor = '#E1F5EE',
    rating = 0,
    reviews = 0,
    onPress,
    onBookPress,
    showButton = true,
    buttonLabel = 'View Details',
    style,
} : ServiceCardProps) {
    return (
        <TouchableOpacity
            style={[styles.card, style]}
            onPress={onPress}
            activeOpacity={0.85}
        >
            {/* Image area */}
            <View style={[styles.imageArea, { backgroundColor: bgColor }]}>
                <Text style={styles.emoji}>{emoji}</Text>
            </View>

            {/* Content */}
            <View style={styles.body}>
                <View style={styles.titleRow}>
                    <Text style={styles.name} numberOfLines={1}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>

                {description && (
                    <Text style={styles.description} numberOfLines={2}>{description}</Text>
                )}

                <View style={styles.footer}>
                    <StarRating rating={rating} reviews={reviews} />
                    {showButton && (
                        <AppButton
                            title={buttonLabel}
                            onPress={onBookPress ?? onPress}
                            size="sm"
                            fullWidth={false}
                            style={styles.btn}
                        />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.lg,
        overflow: 'hidden',
        marginBottom: 12,
        ...SHADOW.sm,
    },
    imageArea: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        fontSize: 38
    },
    body: {
        padding: 14
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    name: {
        flex: 1,
        fontSize: 14,
        ...FONTS.semibold,
        color: COLORS.gray800,
        marginRight: 8,
    },
    price: {
        fontSize: 13,
        ...FONTS.semibold,
        color: COLORS.primary,
    },
    description: {
        fontSize: 12,
        color: COLORS.gray400,
        lineHeight: 17,
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    btn: {
        paddingHorizontal: 14
    },
});