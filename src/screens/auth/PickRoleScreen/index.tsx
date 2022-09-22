import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';

interface PickRoleScreenType {}

export const PickRoleScreen: React.FC<PickRoleScreenType> = () => {
  return (
    <View style={styles.container}>
      <Text>Pick Role Screen</Text>
    </View>
  );
};
