import React, {useState} from 'react';

import {styles} from './style';
import {Pressable, View} from 'react-native';
import {
  ArrowLeft,
  AuthInfo,
  AuthSignScreenLayout,
  CustomButton,
  CustomInput,
  Stepper,
} from '../../../shared';

import {
  LoginNavigationProp,
  LoginP,
} from '../../../navigation/LoginStack/interface';

interface UserNameAuthScreenProps {
  navigation: LoginNavigationProp<LoginP>;
}

export const UserNameAuthScreen: React.FC<UserNameAuthScreenProps> = ({
  navigation,
}) => {
  const [name, setName] = useState('');

  const onGoBack = () => navigation.goBack();

  const onGoNext = () => {
    navigation.navigate(LoginP.setDOB);
  };

  return (
    <AuthSignScreenLayout>
      <View>
        <Pressable onPress={onGoBack}>
          <ArrowLeft />
        </Pressable>
        <Stepper current={1} wrapperStyle={styles.stepperStyle} />
        <AuthInfo
          headerTitle="Придумайте имя"
          desc="Будет отображаться в профиле, использовать можно буквы, цифры и дефис с пробелом"
        />
        <CustomInput value={name} onChangeText={setName} inputTag="Имя" />
      </View>

      <CustomButton title="Далее" onPress={onGoNext} />
    </AuthSignScreenLayout>
  );
};
