import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.lightGrey,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },

  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    marginLeft: 10,
    color: COLORS.dark,
    fontSize: 18,
    flex: 1,
    fontFamily: 'Circe-Regular',
  },
});
