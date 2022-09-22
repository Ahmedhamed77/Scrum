import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};
