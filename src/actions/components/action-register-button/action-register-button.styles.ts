import { StyleSheet } from 'react-native';

export const ActionRegisterButtonStyles = StyleSheet.create({
  containerDefault: {
    borderRadius: 10,
    width: 110,
  },
  textContainer: {
    width: '100%',
  },
  mainText: {
    textAlign: 'center',
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
    padding: 10
  },
  container: {},
});
