import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    TextInput, StatusBar,
    KeyboardAvoidingView, Platform, ScrollView,
    Image,
} from 'react-native';
import { COLORS, RADIUS, FONTS, SHADOW } from '../../theme/index';
import AppTextInput from '../../component/AppTextInput/AppTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../component/AppButton/AppButton';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={styles.logoBox}>
                            <Image
                                source={require('../../assets/images/logo.png')}
                                style={styles.logoIcon} />
                        </View>
                        <Text style={styles.title}>Welcome Back</Text>
                        <Text style={styles.subtitle}>Sign in to your account</Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <Text style={styles.label}>Username</Text>
                        <View style={styles.passRow}>
                            <AppTextInput
                                style={{ flex: 1, marginBottom: 0 }}
                                placeholder="Enter your username"
                                placeholderTextColor={COLORS.gray400}
                                value={username}
                                onChangeText={setUsername}
                                autoCapitalize="none"
                                keyboardType="default"
                                editable={true}
                                secureTextEntry={false}
                                multiline={false}
                                rows={3}
                                error={null}
                                icon={
                                    <Icon name="user" size={20} color="#999" />
                                }
                            />
                        </View>

                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passRow}>
                            <AppTextInput
                                style={{ flex: 1, marginBottom: 0 }}
                                placeholder="Enter your password"
                                placeholderTextColor={COLORS.gray400}
                                value={password}
                                onChangeText={setPassword}
                                secureText={true}
                                autoCapitalize="none"
                                keyboardType="default"
                                editable={true}
                                multiline={false}
                                rows={3}
                                error={null}
                                icon={
                                    <Icon name="lock" size={20} color="#999" />
                                }
                            />
                        </View>

                        <TouchableOpacity style={styles.forgotBtn}>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <AppButton
                            title="Sign In"
                            onPress={() => navigation.navigate('Home')}
                            style={styles.loginBtn}
                            textStyle={styles.loginBtnText}
                        />

                        <View style={styles.signupRow}>
                            <Text style={styles.signupText}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.signupLink}>Sign Up</Text>
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
        paddingTop: 40,
        paddingBottom: 36,
        alignItems: 'center',
        gap: 8,
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
    title: {
        fontSize: 32,
        color: COLORS.white,
        fontWeight: 600,
        letterSpacing: 0.5,
        textTransform: "uppercase",
    },
    subtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.75)'
    },
    form: {
        padding: 24,
        gap: 4
    },
    label: {
        fontSize: 13,
        color: COLORS.gray600,
        ...FONTS.medium,
        marginBottom: 6,
        marginTop: 8
    },
    input: {
        backgroundColor: COLORS.gray50,
        borderWidth: 1,
        borderColor: COLORS.gray200,
        borderRadius: RADIUS.sm,
        padding: 13,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: 4,
    },
    passRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    eyeBtn: {
        padding: 10
    },
    forgotBtn: {
        alignSelf: 'flex-end',
        marginTop: 6,
        marginBottom: 20
    },
    forgotText: {
        fontSize: 13,
        color: COLORS.primary,
        ...FONTS.medium
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: RADIUS.md,
        paddingVertical: 15,
        alignItems: 'center',
        ...SHADOW.sm,
    },
    loginBtnText: {
        color: COLORS.white,
        fontSize: 15,
        ...FONTS.semibold
    },
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    signupText: {
        fontSize: 13,
        color: COLORS.gray600
    },
    signupLink: {
        fontSize: 13,
        color: COLORS.primary,
        ...FONTS.semibold
    },
});
