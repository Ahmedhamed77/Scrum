import {COLORS} from './../../../shared/styles/colors/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  logo: {
    textAlign: 'center',
    marginBottom: 24,
  },
  container: {
    marginTop: 70,
    marginHorizontal: 12,
  },
  inputContainer: {
    marginVertical: 12,
  },
  loginButton: {
    height: 50,
  },
});
