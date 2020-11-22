import { StyleSheet } from 'react-native';

const ConfigurableTimelineChartStyles = StyleSheet.create({
  buttonsContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    borderRadius: 15,
    padding: 3,
    marginBottom: 16,
    marginTop: 16
  },
  container: {
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
  },
  button: {
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
  }
});

export default ConfigurableTimelineChartStyles;
