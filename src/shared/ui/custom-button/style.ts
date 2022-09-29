import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.brand.green,
    paddingVertical: 12,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
});
