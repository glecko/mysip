import { StyleSheet } from 'react-native';

const DrinkButtonItemStyles = StyleSheet.create({
  swipeRowFront: {

    borderColor: 'gray',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  description: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between'
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
