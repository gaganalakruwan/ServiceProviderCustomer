import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet,
} from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../theme/index';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppInput({
    label,
    placeholder,
    value,
    onChangeText,
    secureText = false,
    multiline = false,
    rows = 3,
    error,
    icon,
    keyboardType = 'default',
    editable = true,
    style,
    ...rest
}) {
    const [showPass, setShowPass] = useState(false);
    const [focused, setFocused] = useState(false);

    const isSecure = secureText && !showPass;

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={[
                styles.inputWrap,
                focused && styles.inputWrapFocused,
                !!error && styles.inputWrapError,
                !editable && styles.inputWrapDisabled,
            ]}>
                {icon && <Text style={styles.icon}>{icon}</Text>}

                <TextInput
                    style={[
                        styles.input,
                        multiline && { height: rows * 36, textAlignVertical: 'top', paddingTop: 10 },
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray400}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}
                    multiline={multiline}
                    keyboardType={keyboardType}
                    editable={editable}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    autoCapitalize="none"
                    {...rest}
                />

                {secureText && (
                    <TouchableOpacity onPress={() => setShowPass(p => !p)} style={styles.eyeBtn}>
                        <Icon name={showPass ? 'eye-slash' : 'eye'} size={18} color="#999" />
                    </TouchableOpacity>
                )}
            </View>

            {error && <Text style={styles.error}>⚠ {error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 14 },
    label: {
        fontSize: 13,
        ...FONTS.medium,
        color: COLORS.gray600,
        marginBottom: 6,
    },
    inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.gray50,
        borderWidth: 1,
        borderColor: COLORS.gray200,
        borderRadius: RADIUS.sm,
        paddingHorizontal: 12,
    },
    inputWrapFocused: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
    },
    inputWrapError: {
        borderColor: COLORS.danger,
    },
    inputWrapDisabled: {
        opacity: 0.6,
        backgroundColor: COLORS.gray100,
    },
    icon: {
        fontSize: 14,
        marginRight: 8
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: COLORS.black,
        paddingVertical: 13,
    },
    eyeBtn: {
        padding: 6
    },
    error: {
        fontSize: 11,
        color: COLORS.danger,
        marginTop: 4,
        marginLeft: 2,
    },
});