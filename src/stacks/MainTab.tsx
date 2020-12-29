import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Gallery from '../screens/gallery/gallery';
import Home from '../screens/home/home';
import CustomTabBar from '../components/customTabBar/customTabBar';
import CreateEvent from '../screens/createEvent/createEvent';
import Profile from '../screens/profile/profile';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTab;
