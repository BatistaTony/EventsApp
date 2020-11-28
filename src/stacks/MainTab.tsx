import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Gallery from '../screens/gallery/gallery';
import Home from '../screens/home/home';
import CustomTabBar from '../components/customTabBar/customTabBar';
import CreateEvent from '../screens/createEvent/createEvent';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Gallery" component={Gallery} />
    </Tab.Navigator>
  );
};

export default MainTab;
