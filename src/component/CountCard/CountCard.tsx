import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, RADIUS, SHADOW } from "../../theme";

interface HomeCardProps {
    label: string;
    subLabel: string;
}

export default function HomeCard({ label, subLabel }: HomeCardProps) {
    return (
        <View style={styles.menuCard}>
            <Text style={styles.menuLabel}>{label}</Text>
            <Text style={styles.subLabel}>{subLabel}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    menuCard: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.lg,
        paddingHorizontal: 16,
        paddingVertical: 20,
        ...SHADOW.md,
        marginTop: 10,
        flexDirection: 'column',
        gap: 12,
    },
    menuLabel: {
        flex: 1,
        fontSize: 14,
        color: COLORS.gray800,
        ...FONTS.medium,
    },
    subLabel: {
        fontSize: 30,
        ...FONTS.regular,
        color: COLORS.gray400,
        textAlign: 'right',
    },
});
