import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';

interface ScheduleScreenProps {}

export const ScheduleScreen: React.FC<ScheduleScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>ScheduleScreen</Text>
    </View>
  );
};
