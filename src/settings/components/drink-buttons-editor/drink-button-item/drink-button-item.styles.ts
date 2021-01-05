import { StyleSheet } from 'react-native';

const DrinkButtonItemStyles = StyleSheet.create({
  swipeRowFront: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
  },
  description: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  image: {
    height: 40,
    width: 40,
  }
});

export default DrinkButtonItemStyles;
