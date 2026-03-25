import React, { useEffect } from 'react';
import {
    View, Text, StyleSheet,
     StatusBar, Animated,
    Image,
} from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen({ navigation }) {
    const fadeAnim = new Animated.Value(0);
    const slideAnim = new Animated.Value(30);

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
            Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
        ]).start();

        // Auto navigate after 2 seconds
        const timer = setTimeout(() => {
            navigation.replace('SignIn');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
                <View style={styles.logoBox}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.logoIcon} /> 
                </View>
                <Text style={styles.appName}>Service Connect</Text>
                <Text style={styles.tagline}>Your trusted service partner</Text>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    content: {
        alignItems: 'center',
        marginBottom: 60,
    },
    logoBox: {
        width: 150,
        height: 150,
        borderRadius: RADIUS.xl,
        backgroundColor: 'rgba(255, 255, 255, 0.93)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logoIcon: {
        width: 120,
        height: 120,
    },
    appName: {
        fontSize: 32,
        color: COLORS.white,
        fontWeight: 600,
        letterSpacing: 0.5,
        textTransform: "uppercase",
    },
    tagline: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.75)',
        marginTop: 6,
        ...FONTS.regular,
    },
});
