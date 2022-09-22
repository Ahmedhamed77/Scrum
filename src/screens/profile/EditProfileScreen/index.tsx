import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';

interface EditProfileScreenProps {}

export const EditProfileScreen: React.FC<EditProfileScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>EditProfileScreen</Text>
    </View>
  );
};
