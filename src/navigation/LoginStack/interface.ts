import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigationProp, RootP} from '../Router/interface';

export enum LoginP {
  login = 'Login',
  signUp = 'SignUp',
  resetPassword = 'ResetPassword',
  pickRole = 'PickRole',
  setName = 'SetName',
  setDOB = 'SetDOB',
  setPhone = 'SetPhone',
  setAvatar = 'SetAvatar',
}

export type LoginStackParamList = {
  [LoginP.login]: undefined;
  [LoginP.signUp]: undefined;
  [LoginP.resetPassword]: undefined;
  [LoginP.pickRole]: undefined;
  [LoginP.setName]: undefined;
  [LoginP.setDOB]: undefined;
  [LoginP.setPhone]: undefined;
  [LoginP.setAvatar]: undefined;
};

export type LoginNavigationProp<P extends LoginP> = CompositeNavigationProp<
  StackNavigationProp<LoginStackParamList, P>,
  RootNavigationProp<RootP.loginStack>
>;

export type LoginRouteProp<P extends LoginP> = RouteProp<
  LoginStackParamList,
  P
>;
