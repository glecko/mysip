import React from 'react';
import {
  StyleSheet,
  View,
  Text, ScrollView
} from 'react-native';
import DrinkButtonsEditorComponent from 'settings/components/drink-buttons-editor/drink-buttons-editor.component';
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
    <ScrollView>
      <Text style={styles.header}>Settings</Text>
      <HealthSettingsSummaryComponent />
      <DrinkButtonsEditorComponent />
    </ScrollView>
  </View>
);

export default SettingsView;
