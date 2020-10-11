import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import DeleteLastDrinkButton from '../components/drinks/delete-last-drink/delete-last-drink-button.component';
import DrinkButtonsContainer from '../components/drinks/drink-buttons-container/drink-buttons-container.component';

const styles = StyleSheet.create({
  scrollView: {},
  body: {
    backgroundColor: Colors.white,
  },
});

const HomeView = () => (
  <View>
    <Header />
    <DeleteLastDrinkButton />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.body}>
        <DrinkButtonsContainer />
      </View>
    </ScrollView>
  </View>
);

export default HomeView;
