import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../theme/index';

export function CategoryChip({ label, selected = false, onPress, style }) {
    return (
        <TouchableOpacity
            style={[styles.chip, selected && styles.chipSelected, style]}
            onPress={onPress}
            activeOpacity={0.75}
        >
            <Text style={[styles.chipLabel, selected && styles.chipLabelSelected]}>{label}</Text>
        </TouchableOpacity>
    );
}

export function CategoryChipRow({ items = [], activeId, onSelect, style }) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.row, style]}
        >
            {items.map((cat) => (
                <CategoryChip
                    key={cat.id}
                    label={cat.label}
                    selected={activeId === cat.id}
                    onPress={() => onSelect?.(cat.id)}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 0,
        gap: 8,
        paddingVertical: 2
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: RADIUS.full,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.gray200,
    },
    chipSelected: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    chipIcon: {
        fontSize: 13
    },
    chipLabel: {
        fontSize: 12,
        ...FONTS.medium,
        color: COLORS.gray600,
    },
    chipLabelSelected: {
        color: COLORS.white
    },
});