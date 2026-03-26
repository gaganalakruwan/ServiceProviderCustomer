import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/HomeScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import SignIn from '../screens/SignIn/SignInScreen';
import SignUp from '../screens/SignUp/SignUpScreen';
import BottomTabNav from './BottomTabNav';
import ServiceDetail from '../screens/ServiceDetail/ServiceDetailScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNav}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="ServiceDetail"
          component={ServiceDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
