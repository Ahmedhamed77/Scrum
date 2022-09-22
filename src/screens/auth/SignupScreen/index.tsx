import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';

interface SignUpScreenProps {}

export const SignUpScreen: React.FC<SignUpScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
    </View>
  );
};
