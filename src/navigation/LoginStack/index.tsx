import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen, PickRoleScreen} from '../../screens';
import {LoginP, LoginStackParamList} from './interface';

const Stack = createStackNavigator<LoginStackParamList>();

export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LoginP.pickRole}
        component={PickRoleScreen}
        options={{headerTitle: () => null}}
      />
      <Stack.Screen
        name={LoginP.login}
        component={LoginScreen}
        options={{headerTitle: () => null}}
      />
    </Stack.Navigator>
  );
};
