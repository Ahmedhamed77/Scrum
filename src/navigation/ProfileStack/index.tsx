import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileP, ProfileStackParamList} from './interface';
import {ProfileScreen} from '../../screens/profile/ProfileScreen';
import {EditProfileScreen} from '../../screens/profile/EditProfileScreen';

const Stack = createStackNavigator<ProfileStackParamList>();

export const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ProfileP.profile}
        component={ProfileScreen}
        options={{}}
      />
      <Stack.Screen
        name={ProfileP.editProfile}
        component={EditProfileScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};
