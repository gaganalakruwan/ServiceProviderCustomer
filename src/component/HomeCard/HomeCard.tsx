import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, RADIUS, SHADOW } from "../../theme";
import Icon from 'react-native-vector-icons/Feather';

interface HomeCardProps {
    navigation: any;
    icon: string;
    label: string;
    subLabel: string;
    screen: string;
}

export default function HomeCard({ navigation, icon, label, subLabel, screen }: HomeCardProps) {
    return (
        <View style={styles.menuCard}>
            <TouchableOpacity
                style={styles.menuRow}
                onPress={() => navigation.navigate(screen)}
            >
                {/* <Text style={styles.menuIcon}>{icon}</Text> */}
                <Text style={styles.menuLabel}>{label}</Text>
                <Text style={styles.subLabel}>{subLabel}</Text>
                <Text style={styles.menuArrow}>
                    <Icon name="chevron-right" size={20} color={COLORS.gray400} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuCard: {
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.lg,
        paddingHorizontal: 16,
        paddingVertical: 20,
        ...SHADOW.md,
        marginTop: 10,
    },
    menuRow: {
        gap: 5,
    },
    menuIcon: {
        fontSize: 18,
        width: 24,
        textAlign: 'center'
    },
    menuLabel: {
        flex: 1,
        fontSize: 14,
        color: COLORS.gray800
    },
    subLabel: {
        fontSize: 12,
        ...FONTS.regular,
        color: COLORS.gray400,
    },
    menuArrow: {
        position: 'absolute',
        right: 0,
        top: 0,
        fontSize: 18,
        color: COLORS.gray400
    },
});
