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
import ActionListView from '../components/actions/action-list-view/action-list-view.component';

const MainView = () => (
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}
  >
    <Header />
    {global.HermesInternal == null ? null : (
      <View style={styles.engine}>
        <Text style={styles.footer}>Engine: Hermes</Text>
      </View>
    )}
    <View style={styles.body}>
      <ActionListView name="alcohol unit" maxEntries={10} />
      <DrinkButtonsContainer />
      <DeleteLastActionButton type="alcohol unit" />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default MainView;
