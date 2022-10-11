import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {CustomText} from '../custom-text';

import {styles} from './style';

export interface CustomInputProps extends Omit<TextInputProps, 'style'> {
  wrapperStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  RightIcon?: React.FC;
  LeftIcon?: React.FC;
  inputTag?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  wrapperStyle,
  inputStyle,
  LeftIcon,
  RightIcon,
  inputTag,
  inputContainerStyle,
  ...otherProps
}) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {inputTag && <CustomText textS>{inputTag}</CustomText>}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {LeftIcon && <LeftIcon />}
        <TextInput
          {...otherProps}
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.inputText, inputStyle]}
        />
        {RightIcon && <RightIcon />}
      </View>
    </View>
  );
};
