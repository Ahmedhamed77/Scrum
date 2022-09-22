import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';

interface ProfileScreenType {}

export const ProfileScreen: React.FC<ProfileScreenType> = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};
