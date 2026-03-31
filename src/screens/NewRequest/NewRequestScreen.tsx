import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../theme";
import AppHeader from "../../component/AppHeader/AppHeader";
import AppTextInput from "../../component/AppTextInput/AppTextInput";
import AppSelector from "../../component/AppSelector/AppSelector";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from "../../component/AppButton/AppButton";
import DateTimePicker from '@react-native-community/datetimepicker';

// 1. Define Service Types
const SERVICE_TYPES = ["Work Order", "Maintenance Request", "Repair Request", "Inspection Request", "Other"];
const TIME_SLOTS = ["Morning", "Afternoon"];

export default function NewRequestScreen({ navigation }: any) {
    const [serviceType, setServiceType] = useState(SERVICE_TYPES[0]);
    const [serviceDescription, setServiceDescription] = useState("");
    const [location, setLocation] = useState("");
    const [preferredDate, setPreferredDate] = useState("");
    const [preferredTime, setPreferredTime] = useState("Morning"); // Default to Morning
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onDateChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        if (event.type === 'set' && selectedDate) {
            setDate(currentDate);
            setPreferredDate(currentDate.toLocaleDateString());
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

            <AppHeader
                title="New Request"
                onBack={() => navigation.goBack()}
            />

            <ScrollView contentContainerStyle={styles.form}>
                <View style={styles.formGroup}>
                    {/* 2. Service Type Selection UI */}
                    <Text style={styles.label}>Service Type</Text>
                    <AppSelector 
                        options={SERVICE_TYPES} 
                        selectedOption={serviceType} 
                        onSelect={setServiceType} 
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

                    {/* 3. Preferred Time Selection Buttons */}
                    <Text style={styles.label}>Preferred Time</Text>
                    <AppSelector 
                        options={TIME_SLOTS} 
                        selectedOption={preferredTime} 
                        onSelect={setPreferredTime} 
                    />

                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                        />
                    )}

                    <AppButton
                        title="Submit"
                        onPress={() => { console.log({ serviceType, preferredTime }) }}
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
    },
    formGroup: {
        gap: 12,
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
        marginTop: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
    },
});