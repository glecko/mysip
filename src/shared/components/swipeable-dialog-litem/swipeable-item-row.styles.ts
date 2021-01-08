import { StyleSheet } from 'react-native';

const SwipeableDialogItemStyles = StyleSheet.create({
  swipeRowFront: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  actionButton: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

export default SwipeableDialogItemStyles;
