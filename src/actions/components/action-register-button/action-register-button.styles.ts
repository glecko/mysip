import { StyleSheet } from 'react-native';

export const ActionRegisterButtonStyles = StyleSheet.create({
  textContainer: {
    width: '100%',
  },
  mainText: {
    paddingTop: 4,
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    textAlign: 'center',
  },
  bottomRightText: {
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  bottomLeftText: {
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  bottomTextContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export const ActionRegisterImageButtonStyles = StyleSheet.create({
  image: {
    height: 45,
    width: 45,
    resizeMode: 'stretch',
  },
  button: {
    alignItems: 'center',
    padding: 10
  },
  container: {},
});
