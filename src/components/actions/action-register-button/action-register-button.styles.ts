import { StyleSheet } from 'react-native';

export const ActionRegisterButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 110
  },
});

export const ActionRegisterImageButtonStyles = StyleSheet.create({
  image: {
    height: 55,
    width: 55,
    resizeMode: 'stretch',
  },
  button: {
    alignItems: 'center',
    margin: 5,
  },
  container: {},
  text: {
    textAlign: 'center'
  },
});
