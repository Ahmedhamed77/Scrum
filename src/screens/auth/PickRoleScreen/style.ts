import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginTop: 32,
  },
  contentContainer: {
    flex: 1,
  },
  headerText: {
    paddingBottom: 16,
  },
  descText: {
    color: COLORS.dark,
    paddingBottom: 16,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentButton: {
    flex: 1,
    marginRight: 12,
  },
  teacherButton: {
    flex: 1,
  },
});
