import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Tabs} from './interface';
import {HomeTabStack} from '../HomeTabStack';

import {ProfileStack} from '../ProfileStack';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Tabs.homeTab}
      screenOptions={{headerShown: false}}>
      <Tab.Screen component={HomeTabStack} name={Tabs.homeTab} />

      <Tab.Screen component={ProfileStack} name={Tabs.profileTab} />
    </Tab.Navigator>
  );
};
