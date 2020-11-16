import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import DrinkButtonsContainer from '../drinks/components/drink-buttons-container/drink-buttons-container.component';
import IntervalMonitorsContainer
  from '../drinks/components/interval-monitors-container/interval-monitors-container.component';

const styles = StyleSheet.create({
  scrollView: {},
  body: {},
  container: { flex: 1 }
});

const HomeView = () => (
  <View style={styles.container}>
    <IntervalMonitorsContainer />
    <ScrollView style={styles.scrollView}>
      <View style={styles.body}>
        <DrinkButtonsContainer />
      </View>
    </ScrollView>
  </View>
);

export default HomeView;
