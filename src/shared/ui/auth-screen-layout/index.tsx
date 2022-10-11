import React, {PropsWithChildren} from 'react';

import {styles} from './style';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 20;
interface AuthSignScreenLayoutProps extends PropsWithChildren {
  scrollWrapperStyle?: StyleProp<ViewStyle>;
}

export const AuthSignScreenLayout: React.FC<AuthSignScreenLayoutProps> = ({
  children,
  scrollWrapperStyle,
}) => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={styles.keyboardViewContainer}
      behavior="padding"
      keyboardVerticalOffset={headerHeight + STATUS_BAR_HEIGHT}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={[styles.scrollContainer, scrollWrapperStyle]}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
