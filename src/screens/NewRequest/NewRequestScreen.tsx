import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../theme";
import AppHeader from "../../component/AppHeader/AppHeader";
import AppTextInput from "../../component/AppTextInput/AppTextInput";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from "../../component/AppButton/AppButton";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function NewRequestScreen({ navigation }: any) {
    const [serviceType, setServiceType] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [location, setLocation] = useState("");
    const [preferredDate, setPreferredDate] = useState("");
    const [preferredTime, setPreferredTime] = useState("");
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const onDateChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        if (event.type === 'set' && selectedDate) {
            setDate(currentDate);
            setPreferredDate(currentDate.toLocaleDateString());
        }
    };

    const onTimeChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowTimePicker(false);
        if (event.type === 'set' && selectedDate) {
            setDate(currentDate);
            setPreferredTime(currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

            {/* Header */}
            <AppHeader
                title="New Request"
                onBack={() => navigation.goBack()}
            />

            <ScrollView contentContainerStyle={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Service Type</Text>
                    <AppTextInput
                        placeholder="Select Service Type"
                        value={serviceType}
                        onChangeText={setServiceType}
                    />

                    <Text style={styles.label}>Service Description</Text>
                    <AppTextInput
                        placeholder="Enter Service Description"
                        value={serviceDescription}
                        onChangeText={setServiceDescription}
                        multiline
                        numberOfLines={4}
                        style={styles.textArea}
                    />

                    <Text style={styles.label}>Location</Text>
                    <AppTextInput
                        placeholder="Enter Location"
                        value={location}
                        onChangeText={setLocation}
                    />

                    <Text style={styles.label}>Preferred Date</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)} activeOpacity={0.7}>
                        <View pointerEvents="none">
                            <AppTextInput
                                placeholder="Select Preferred Date"
                                value={preferredDate}
                                editable={false}
                                icon={<Icon name="calendar" size={16} color={COLORS.gray800} />}
                            />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.label}>Preferred Time</Text>
                    <TouchableOpacity onPress={() => setShowTimePicker(true)} activeOpacity={0.7}>
                        <View pointerEvents="none">
                            <AppTextInput
                                placeholder="Select Preferred Time"
                                value={preferredTime}
                                editable={false}
                                icon={<Icon name="clock-o" size={16} color={COLORS.gray800} />}
                            />
                        </View>
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                        />
                    )}

                    {showTimePicker && (
                        <DateTimePicker
                            value={date}
                            mode="time"
                            display="default"
                            onChange={onTimeChange}
                        />
                    )}

                    <AppButton
                        title="Submit"
                        onPress={() => { }}
                        style={styles.submitButton}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    form: {
        padding: 24,
        gap: 16,
    },
    formGroup: {
        gap: 8,
    },
    label: {
        fontSize: 16,
        ...FONTS.medium,
        color: COLORS.black,
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
    submitButton: {
        marginTop: 16,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
    },
    contactInfo: {
        gap: 8,
    },

});
