import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {styles} from './style';

export interface CustomInputProps extends Omit<TextInputProps, 'style'> {
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  RightIcon?: React.FC;
  LeftIcon?: React.FC;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  inputStyle,
  LeftIcon,
  RightIcon,
  inputContainerStyle,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, inputContainerStyle]}>
      {LeftIcon && <LeftIcon />}
      <TextInput
        {...otherProps}
        autoCapitalize="none"
        autoCorrect={false}
        style={[styles.inputText, inputStyle]}
      />
      {RightIcon && <RightIcon />}
    </View>
  );
};
