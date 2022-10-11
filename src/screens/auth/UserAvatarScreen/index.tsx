import React from 'react';

import {styles} from './style';
import {Pressable, View} from 'react-native';
import {
  ArrowLeft,
  AuthInfo,
  AuthSignScreenLayout,
  CustomButton,
  Stepper,
} from '../../../shared';
import {
  LoginNavigationProp,
  LoginP,
} from '../../../navigation/LoginStack/interface';

interface UserAvatarScreenType {
  navigation: LoginNavigationProp<LoginP>;
}

export const UserAvatarScreen: React.FC<UserAvatarScreenType> = ({
  navigation,
}) => {
  const onGoBack = () => navigation.goBack();
  const onGoNext = () => navigation.navigate(LoginP.pickRole);
  return (
    <AuthSignScreenLayout>
      <View>
        <Pressable onPress={onGoBack}>
          <ArrowLeft />
        </Pressable>
        <Stepper current={4} wrapperStyle={styles.stepperStyle} />
        <AuthInfo
          headerTitle="Выберите фотографию профиля"
          desc="Мы будем рады видеть вас на фото, убедитесь что фотография в хорошем качестве"
        />
      </View>

      <CustomButton title="Далее" onPress={onGoNext} />
    </AuthSignScreenLayout>
  );
};
