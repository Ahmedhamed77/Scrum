import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    width: (width - 60) / 6,
    height: 4,
    borderRadius: 2,
    margin: 2,
    backgroundColor: '#DDDDDD',
  },
  currentStep: {
    backgroundColor: '#4CA22F',
  },
});
