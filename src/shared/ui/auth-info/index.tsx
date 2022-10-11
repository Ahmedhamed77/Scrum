import React from 'react';

import {styles} from './style';
import {CustomText} from '../custom-text';
import {StyleProp, TextStyle} from 'react-native';

interface AuthInfoType {
  headerTitle: string;
  headerTitleStyle?: StyleProp<TextStyle>;
  desc: string;
  descStyle?: StyleProp<TextStyle>;
}

export const AuthInfo: React.FC<AuthInfoType> = ({
  headerTitle,
  desc,
  headerTitleStyle,
  descStyle,
}) => {
  return (
    <React.Fragment>
      <CustomText h2 style={[styles.headerTitleStyle, headerTitleStyle]}>
        {headerTitle}
      </CustomText>
      <CustomText textDefault style={[styles.descStyle, descStyle]}>
        {desc}
      </CustomText>
    </React.Fragment>
  );
};
export default AuthInfo;
