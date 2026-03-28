import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { moderateScale } from '../../constant/Metrics';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: any; 
  textStyle?: any;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  iconBgColor?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  iconName,
  iconSize = moderateScale(18),
  iconColor = '#FFFFFF',
  iconBgColor = 'rgba(255,255,255,0.25)',
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={[styles.button, style]}>
        <View style={styles.content}>
          {iconName && (
            <View style={[styles.iconBox, { backgroundColor: iconBgColor }]}>
            <Icon
              name={iconName}
              size={iconSize}
              color={iconColor}
            />
            </View>
          )}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  iconBox: {
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
});
