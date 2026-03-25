import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/index';

interface AppHeaderProps {
    title: string;
    subtitle?: string;
    onBack?: () => void;
    backLabel?: string;
    rightIcon?: string;
    onRightPress?: () => void;
    children?: React.ReactNode;
    style?: object;
}

export default function AppHeader({
    title,
    subtitle,
    onBack,
    backLabel = '← Back',
    rightIcon,
    onRightPress,
    children,
    style,
}: AppHeaderProps) {
    return (
        <View style={[styles.container, style]}>
            {/* Back + Right row */}
            {(onBack || rightIcon) && (
                <View style={styles.topRow}>
                    {onBack ? (
                        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
                            <Text style={styles.backText}>{backLabel}</Text>
                        </TouchableOpacity>
                    ) : <View />}

                    {rightIcon && (
                        <TouchableOpacity onPress={onRightPress} style={styles.rightBtn}>
                            <Text style={{ fontSize: 20 }}>{rightIcon}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}

            {/* Title row */}
            <View style={styles.titleRow}>
                <View style={{ flex: 1 }}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            </View>

            {/* Optional children (search bar, location bar, etc.) */}
            {children && <View style={styles.children}>{children}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    backBtn: {
        paddingVertical: 2
    },
    backText: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 13,
    },
    rightBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.15)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 20,
        ...FONTS.semibold,
        color: COLORS.white,
    },
    subtitle: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.75)',
        marginTop: 3,
    },
    children: {
        marginTop: 12
    },
});