import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  LoginScreen,
  PickRoleScreen,
  UserAvatarScreen,
  UserDOBScreen,
  UserNameAuthScreen,
  UserPhoneScreen,
} from '../../screens';
import {LoginP, LoginStackParamList} from './interface';
import {COLORS} from '../../shared';

const Stack = createStackNavigator<LoginStackParamList>();

export const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: COLORS.white},
      }}>
      <Stack.Screen
        name={LoginP.login}
        component={LoginScreen}
        options={{headerTitle: () => null}}
      />

      <Stack.Screen
        name={LoginP.setName}
        component={UserNameAuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={LoginP.setDOB}
        component={UserDOBScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={LoginP.setPhone}
        component={UserPhoneScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={LoginP.setAvatar}
        component={UserAvatarScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={LoginP.pickRole}
        component={PickRoleScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
