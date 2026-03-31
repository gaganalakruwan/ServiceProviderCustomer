import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS } from '../../theme';

interface AppSelectorProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const AppSelector = ({ options, selectedOption, onSelect }: AppSelectorProps) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {options.map((option) => {
          const isSelected = selectedOption === option;
          return (
            <TouchableOpacity
              key={option}
              style={[
                styles.chip,
                isSelected && styles.selectedChip
              ]}
              onPress={() => onSelect(option)}
            >
              <Text style={[
                styles.chipText,
                isSelected && styles.selectedChipText
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    marginRight: 10,
    backgroundColor: COLORS.white,
  },
  selectedChip: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipText: {
    fontSize: 14,
    color: COLORS.gray800,
    ...FONTS.medium,
  },
  selectedChipText: {
    color: COLORS.white,
  },
});

export default AppSelector;