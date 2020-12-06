import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import HealthSettingsSummaryComponent
  from '../settings/components/health-settings-summary/health-settings-summary.component';

const styles = StyleSheet.create({
  scrollView: {},
  container: { flex: 1 },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingTop: 32
  }
});

const SettingsView = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Settings</Text>
    <HealthSettingsSummaryComponent />
  </View>
);

export default SettingsView;
