import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderColor: COLORS.dark,
    borderWidth: 1,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputText: {
    flex: 1,
    width: 'auto',
    backgroundColor: 'transparent',
    color: COLORS.dark,
    fontSize: 18,
    fontFamily: 'Circe-Regular',
  },
});
