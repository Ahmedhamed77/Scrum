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

interface PickRoleScreenType {
  navigation: LoginNavigationProp<LoginP>;
}

export const PickRoleScreen: React.FC<PickRoleScreenType> = ({navigation}) => {
  const onGoBack = () => navigation.goBack();
  const onGoNext = () => {
    console.log('go to tab screen');
  };

  return (
    <AuthSignScreenLayout>
      <View>
        <Pressable onPress={onGoBack}>
          <ArrowLeft />
        </Pressable>
        <Stepper current={5} wrapperStyle={styles.stepperStyle} />
        <AuthInfo
          headerTitle="Выберите роль"
          desc="Мы используем роль, чтобы показать вам ленту"
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          buttonStyle={styles.studentButton}
          title="Студент"
          onPress={onGoNext}
        />
        <CustomButton
          buttonStyle={styles.teacherButton}
          title="Преподаватель"
          onPress={onGoNext}
        />
      </View>
    </AuthSignScreenLayout>
  );
};
