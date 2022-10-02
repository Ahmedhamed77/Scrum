import React, {useState} from 'react';

import {styles} from './style';
import {View} from 'react-native';

import {
  COLORS,
  CustomButton,
  CustomText,
  CustomInput,
  LayoutAvoidKeyboard,
} from '../../../shared';
import Icon from 'react-native-vector-icons/Ionicons';
import {useToggle} from '../../../shared/hooks';
import {ScrollView} from 'react-native-gesture-handler';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    value: isHidePassword,
    toggle: toggleHidePassword,
    setFalse,
  } = useToggle(true);
  const passwordIcon = isHidePassword ? 'eye-off' : 'eye';

  const onUserLogin = () => {
    setFalse();
    setEmail('');
    setPassword('');
    console.log('idiot user in');
    //TODO: add the backend integeration
  };

  return (
    <LayoutAvoidKeyboard>
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <CustomText h1 style={styles.logo}>
            Logo
          </CustomText>
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            inputContainerStyle={styles.inputContainer}
            LeftIcon={() => (
              <Icon name="mail" size={20} color={COLORS.darkGray} />
            )}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            secureTextEntry={isHidePassword}
            onChangeText={setPassword}
            inputContainerStyle={styles.inputContainer}
            LeftIcon={() => (
              <Icon name="lock-closed" size={20} color={COLORS.darkGray} />
            )}
            RightIcon={() => (
              <Icon
                size={20}
                name={passwordIcon}
                color={COLORS.darkGray}
                onPress={toggleHidePassword}
              />
            )}
          />
          <CustomButton
            title="Login"
            onPress={onUserLogin}
            buttonStyle={styles.loginButton}
          />
        </View>
      </ScrollView>
    </LayoutAvoidKeyboard>
  );
};
