import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {LoginStackParamList} from '../LoginStack/interface';

import {TabsParamList} from '../TabNavigator/interface';

export enum RootP {
  auth = 'Auth',

  app = 'App',
  editProfile = 'EditProfile',

  loginStack = 'LoginStack',
}

export type RootStackParamList = {
  [RootP.auth]: undefined;

  [RootP.app]: NavigatorScreenParams<TabsParamList>;

  [RootP.editProfile]?: {managedExpertId?: number};

  [RootP.loginStack]: NavigatorScreenParams<LoginStackParamList>;
};

export type RootNavigationProp<P extends RootP> = StackNavigationProp<
  RootStackParamList,
  P
>;

export type RootRouteProp<P extends RootP> = RouteProp<RootStackParamList, P>;
