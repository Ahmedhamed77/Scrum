import React from 'react';

import {styles} from './style';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface CustomButtonProps extends Omit<PressableProps, 'style'> {
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  buttonStyle,
  titleStyle,
  ...props
}) => {
  return (
    <Pressable style={[styles.container, buttonStyle]} {...props}>
      <Text style={[styles.textStyle, titleStyle]}>{title}</Text>
    </Pressable>
  );
};
