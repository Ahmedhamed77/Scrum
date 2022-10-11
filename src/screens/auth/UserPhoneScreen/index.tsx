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

interface UserPhoneScreenProps {
  navigation: LoginNavigationProp<LoginP>;
}

export const UserPhoneScreen: React.FC<UserPhoneScreenProps> = ({
  navigation,
}) => {
  const [phone, setPhone] = useState('');
  const onGoBack = () => navigation.goBack();
  const onGoNext = () => navigation.navigate(LoginP.setAvatar);
  return (
    <AuthSignScreenLayout>
      <View>
        <Pressable onPress={onGoBack}>
          <ArrowLeft />
        </Pressable>
        <Stepper current={3} wrapperStyle={styles.stepperStyle} />
        <AuthInfo
          headerTitle="У вас есть телефон?"
          desc="Укажите свой номер телефона"
        />
        <CustomInput value={phone} onChangeText={setPhone} inputTag="телефон" />
      </View>

      <CustomButton title="Далее" onPress={onGoNext} />
    </AuthSignScreenLayout>
  );
};
