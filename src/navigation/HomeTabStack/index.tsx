import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeP, HomeStackParamList} from './interface';
import {ScheduleScreen} from '../../screens';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeTabStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HomeP.home} component={ScheduleScreen} options={{}} />
    </Stack.Navigator>
  );
};
