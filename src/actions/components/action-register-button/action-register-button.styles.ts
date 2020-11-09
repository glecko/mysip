import { StyleSheet } from 'react-native';

export const ActionRegisterButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 110,
    padding: 5,
    margin: 5,
  },
  textContainer: {
    width: '100%',
  },
  mainText: {
    textAlign: 'center'
  },
  bottomRightText: {},
  bottomLeftText: {},
  bottomTextContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
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
});
