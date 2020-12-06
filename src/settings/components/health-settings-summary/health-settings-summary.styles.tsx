import { StyleSheet } from 'react-native';

const HealthSettingsSummaryStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    padding: 16,
    margin: 16,
  },
  text: {
    fontSize: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 16,
    paddingLeft: 8,
  }
});

export default HealthSettingsSummaryStyles;
