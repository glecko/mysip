import { StyleSheet } from 'react-native';

const ConfigurableTimelineChartStyles = StyleSheet.create({
  buttonsContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    borderRadius: 15,
    padding: 3,
    marginTop: 16,
    marginBottom: 3,
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
  },
  titleContainer: {
    width: '100%',
    paddingLeft: 16,
    marginBottom: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray'
  }
});

export default ConfigurableTimelineChartStyles;
