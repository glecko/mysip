import { StyleSheet } from 'react-native';

const IntervalMonitorsContainerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16
  },
  leftContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bloodConcentrationContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  intervalDescriptionText: {
    fontSize: 18,
  },
  monitorText: {
    fontSize: 50
  },
  monitorSubheader: {
    fontSize: 12,
  },
  bloodConcentrationText: {
    fontSize: 30
  },
  bloodConcentrationDescription: {
    fontSize: 12
  },
});

export default IntervalMonitorsContainerStyles;
