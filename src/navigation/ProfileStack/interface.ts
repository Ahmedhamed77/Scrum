import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Tabs, TabsNavigationProp} from '../TabNavigator/interface';

export enum ProfileP {
  profile = 'Profile',
  editProfile = 'EditProfile',
}

export type ProfileStackParamList = {
  [ProfileP.profile]: undefined;
  [ProfileP.editProfile]: undefined;
};

export type SearchNavigationProp<P extends ProfileP> = CompositeNavigationProp<
  StackNavigationProp<ProfileStackParamList, P>,
  TabsNavigationProp<Tabs.homeTab>
>;

export type SearchRouteProp<P extends ProfileP> = RouteProp<
  ProfileStackParamList,
  P
>;
