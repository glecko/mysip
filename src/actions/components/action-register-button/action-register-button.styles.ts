import { StyleSheet } from 'react-native';

export const ActionRegisterButtonStyles = StyleSheet.create({
  textContainer: {
    width: '100%',
  },
  mainText: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    textAlign: 'center',
  },
  mainTextContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
  },
  bottomRightText: {
    maxWidth: '40%',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  bottomLeftText: {
    maxWidth: '60%',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  bottomTextContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 13,
  }
});

export const ActionRegisterImageButtonStyles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  button: {
    alignItems: 'center',
    padding: 10
  },
  container: {},
});
