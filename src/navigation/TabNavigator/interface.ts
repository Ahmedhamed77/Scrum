import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {HomeStackParamList} from '../HomeTabStack/interface';
import {ProfileStackParamList} from '../ProfileStack/interface';
import {RootNavigationProp, RootP} from '../Router/interface';

export enum Tabs {
  homeTab = 'HomeTab',
  profileTab = 'ProfileTab',
}

export type TabsParamList = {
  [Tabs.homeTab]: NavigatorScreenParams<HomeStackParamList>;
  [Tabs.profileTab]: NavigatorScreenParams<ProfileStackParamList>;
};

export type TabsNavigationProp<P extends Tabs> = CompositeNavigationProp<
  BottomTabNavigationProp<TabsParamList, P>,
  RootNavigationProp<RootP.app>
>;
export type TabsRouteProp<P extends Tabs> = RouteProp<TabsParamList, P>;
