import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import ActionListView from '../components/actions/action-list-view/action-list-view.component';

const HistoryView = () => (
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}
  >
    <Header />
    <View style={styles.body}>
      <ActionListView name="alcohol unit" maxEntries={10} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {},
  body: {
    backgroundColor: Colors.white,
  },
});

export default HistoryView;
