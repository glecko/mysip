import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import DeleteLastActionButton
  from '../components/actions/delete-last-action-button/delete-last-action-button.component';
import DrinkButtonsContainer from '../components/drinks/drink-buttons-container/drink-buttons-container.component';

const HomeView = () => (
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}
  >
    <Header />
    <View style={styles.body}>
      <DrinkButtonsContainer />
      <DeleteLastActionButton type="alcohol unit" />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {},
  body: {
    backgroundColor: Colors.white,
  },
});

export default HomeView;
