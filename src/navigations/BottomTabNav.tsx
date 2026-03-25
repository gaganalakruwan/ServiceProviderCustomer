import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';

// Screens
import Home from '../screens/Home/HomeScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

import { COLORS, FONTS } from '../theme';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'HomeTab') {
                        iconName = 'home';
                    } else if (route.name === 'OrdersTab') {
                        iconName = 'list-alt';
                    } else if (route.name === 'ProfileTab') {
                        iconName = 'user';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray400,
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    borderTopWidth: 1,
                    borderTopColor: COLORS.gray200,
                    height: Platform.OS === 'ios' ? 88 : 68,
                    paddingBottom: Platform.OS === 'ios' ? 28 : 12,
                    paddingTop: 12,
                },
                tabBarLabelStyle: {
                    ...FONTS.medium,
                    fontSize: 12,
                }
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="OrdersTab"
                component={OrdersScreen}
                options={{ tabBarLabel: 'Orders' }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
        </Tab.Navigator>
    );
}
