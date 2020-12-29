import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Preload from '../screens/preload/preload';
import SignIn from '../screens/signIn/signIn';
import SignUp from '../screens/signUp/SignUp';
import Home from '../screens/home/home';
import Gallery from '../screens/gallery/gallery';
import SingleEvent from '../screens/singleEvent/singleEvent';
import Search from '../screens/search/search';
import CreateEvent from '../screens/createEvent/createEvent';
import Profile from '../screens/profile/profile';
import MainTab from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SingleEvent" component={SingleEvent} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
    </Stack.Navigator>
  );
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default MainStack;
