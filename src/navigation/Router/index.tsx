import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TabNavigator} from '../TabNavigator';
import {RootP, RootStackParamList} from './interface';
import {EditProfileScreen} from '../../screens/profile/EditProfileScreen';
import {LoginStack} from '../LoginStack';

const MainStack = createStackNavigator<RootStackParamList>();

export const Router: React.FC = () => {
  const hasToken = true;
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {hasToken ? (
          <>
            <MainStack.Screen
              name={RootP.app}
              component={TabNavigator}
              options={{headerShown: false}}
            />

            <MainStack.Screen
              name={RootP.editProfile}
              component={EditProfileScreen}
            />

            <MainStack.Screen
              name={RootP.loginStack}
              component={LoginStack}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <MainStack.Screen
            name={RootP.loginStack}
            component={LoginStack}
            options={{headerShown: false}}
          />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
