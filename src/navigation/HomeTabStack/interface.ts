import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Tabs, TabsNavigationProp} from '../TabNavigator/interface';

export enum HomeP {
  home = 'Home',
}

export type HomeStackParamList = {
  [HomeP.home]: undefined;
};

export type SearchNavigationProp<P extends HomeP> = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, P>,
  TabsNavigationProp<Tabs.homeTab>
>;

export type SearchRouteProp<P extends HomeP> = RouteProp<HomeStackParamList, P>;
