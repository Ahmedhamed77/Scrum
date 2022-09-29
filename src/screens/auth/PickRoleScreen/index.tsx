import React from 'react';

import {styles} from './style';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {CustomButton, CustomText} from '../../../shared';

interface PickRoleScreenType {}

export const PickRoleScreen: React.FC<PickRoleScreenType> = () => {
  const onGoToRegister = () => {
    console.log('onGoToRegister');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <CustomText h1 style={styles.headerText}>
            Добро пожаловать!
          </CustomText>
          <CustomText textDefault style={styles.descText}>
            Укажите свой роль, и мы сохраним ее на будущее
          </CustomText>
          <View style={styles.buttonContainer}>
            <CustomButton
              buttonStyle={styles.studentButton}
              title="Студент"
              onPress={onGoToRegister}
            />
            <CustomButton
              buttonStyle={styles.teacherButton}
              title="Преподаватель"
              onPress={onGoToRegister}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
