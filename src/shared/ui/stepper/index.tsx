import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './style';

interface StepperProps {
  current: number;
  wrapperStyle?: StyleProp<ViewStyle>;
}
export const Stepper: React.FC<StepperProps> = ({current, wrapperStyle}) => {
  const steps = [1, 2, 3, 4, 5];
  return (
    <View style={[styles.container, wrapperStyle]}>
      {steps.map(step => (
        <View
          key={step}
          style={[styles.row, current >= step && styles.currentStep]}
        />
      ))}
    </View>
  );
};
