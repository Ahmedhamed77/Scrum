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
import {
  LoginNavigationProp,
  LoginP,
} from '../../../navigation/LoginStack/interface';

interface LoginScreenProps {
  navigation: LoginNavigationProp<LoginP>;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    value: isHidePassword,
    toggle: toggleHidePassword,
    setFalse,
  } = useToggle(true);

  const passwordIcon = isHidePassword ? 'eye-off' : 'eye';

  //TODO: add the backend integeration
  const onUserLogin = () => {
    setFalse();
    setEmail('');
    setPassword('');
    console.log('idiot user in');
    navigation.navigate(LoginP.setName);
  };

  return (
    <LayoutAvoidKeyboard>
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <CustomText h1 style={styles.logo}>
            Logo
          </CustomText>
          <CustomInput
            inputTag="Почта"
            placeholder="Почта"
            value={email}
            onChangeText={setEmail}
            wrapperStyle={styles.inputContainer}
          />
          <CustomInput
            inputTag="Пароль"
            placeholder="Пароль"
            value={password}
            secureTextEntry={isHidePassword}
            onChangeText={setPassword}
            wrapperStyle={styles.inputContainer}
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
