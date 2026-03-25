import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView, Platform, ScrollView,
    Image,
} from 'react-native';
import { COLORS, RADIUS, FONTS, SHADOW } from '../../theme/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppTextInput from '../../component/AppTextInput/AppTextInput';
import AppButton from '../../component/AppButton/AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen({ navigation }) {
    const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });

    const update = (key, val) => setForm(p => ({ ...p, [key]: val }));

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.header}>
                        <View style={styles.logoBox}>
                            <Image
                                source={require('../../assets/images/logo.png')}
                                style={styles.logoIcon} />
                        </View>
                        <Text style={styles.title}>Create Account</Text>
                        <Text style={styles.subtitle}>Join Service Connect today</Text>
                    </View>

                    <View style={styles.form}>
                        {[
                            { key: 'username', label: 'Username', placeholder: 'Enter username', secure: false },
                            { key: 'email', label: 'Email', placeholder: 'Enter email address', secure: false },
                            { key: 'password', label: 'Password', placeholder: 'Create password', secure: true },
                            { key: 'confirm', label: 'Re-type Password', placeholder: 'Confirm password', secure: true },
                        ].map(({ key, label, placeholder, secure }) => (
                            <View key={key}>
                                <Text style={styles.label}>{label}</Text>
                                <AppTextInput
                                    placeholder={placeholder}
                                    placeholderTextColor={COLORS.gray400}
                                    value={form[key]}
                                    onChangeText={v => update(key, v)}
                                    secureText={secure}
                                    autoCapitalize="none"
                                    keyboardType={key === 'email' ? 'email-address' : 'default'}
                                    icon={
                                        <Icon name={key === 'email' ? 'envelope' : secure ? 'lock' : 'user'} size={20} color="#999" />
                                    }
                                    error={null}
                                    multiline={false}
                                    rows={3}
                                    editable={true}
                                />
                            </View>
                        ))}

                        <AppButton
                            title="Sign Up"
                            onPress={() => navigation.navigate('Home')}
                            style={styles.signupBtn}
                            textStyle={styles.signupBtnText}
                        />

                        <View style={styles.loginRow}>
                            <Text style={styles.loginText}>Already have account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.loginLink}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        paddingTop: 32,
        paddingBottom: 28,
        alignItems: 'center',
        gap: 6,
    },
    logoBox: {
        width: 52,
        height: 52,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    logoIcon: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 20,
        color: COLORS.white,
        ...FONTS.semibold
    },
    subtitle: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.75)'
    },
    form: {
        padding: 24,
        gap: 2
    },
    label: {
        fontSize: 13,
        color: COLORS.gray600,
        ...FONTS.medium,
        marginBottom: 6,
        marginTop: 10
    },
    signupBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: RADIUS.md,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 22,
        ...SHADOW.sm,
    },
    signupBtnText: {
        color: COLORS.white,
        fontSize: 15,
        ...FONTS.semibold
    },
    loginRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 18
    },
    loginText: {
        fontSize: 13,
        color: COLORS.gray600
    },
    loginLink: {
        fontSize: 13,
        color: COLORS.primary,
        ...FONTS.semibold
    },
});
