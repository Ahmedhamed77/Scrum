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

interface UserDOBScreenProps {
  navigation: LoginNavigationProp<LoginP>;
}

export const UserDOBScreen: React.FC<UserDOBScreenProps> = ({navigation}) => {
  const [dateOfBirth, setDOB] = useState('');
  const onGoBack = () => navigation.goBack();
  const onGoNext = () => navigation.navigate(LoginP.setPhone);
  return (
    <AuthSignScreenLayout>
      <View>
        <Pressable onPress={onGoBack}>
          <ArrowLeft />
        </Pressable>
        <Stepper current={2} wrapperStyle={styles.stepperStyle} />
        <AuthInfo
          headerTitle="Укажите дату рождения"
          desc="Эти данные нужны нам для будущих, мы не продаем данные своих героев"
        />
        <CustomInput
          value={dateOfBirth}
          onChangeText={setDOB}
          inputTag="Дата рождения"
        />
      </View>

      <CustomButton title="Далее" onPress={onGoNext} />
    </AuthSignScreenLayout>
  );
};
