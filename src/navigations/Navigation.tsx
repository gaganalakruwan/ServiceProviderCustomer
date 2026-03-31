import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/HomeScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import SignIn from '../screens/SignIn/SignInScreen';
import SignUp from '../screens/SignUp/SignUpScreen';
import BottomTabNav from './BottomTabNav';
import NewRequestScreen from '../screens/NewRequest/NewRequestScreen';
import OrderDetailsScreen from '../screens/OrderDetails/OrderDetailsScreen';
import RateReviewScreen from '../screens/RateReview/RateReviewScreen';

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
          name="NewRequestScreen"
          component={NewRequestScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDetailsScreen"
          component={OrderDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RateReview"
          component={RateReviewScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
