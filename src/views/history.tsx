import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import ActionListView from '../components/actions/action-list-view/action-list-view.component';
import ActionTimelineChart from '../components/actions/action-timeline-chart/action-timeline-chart.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../hooks/drinks/model';

const HistoryView = () => (
  <View>
    <ActionTimelineChart type={ALCOHOL_UNIT_ACTION_TYPE} aggregationFormat="DD/MM/YYYY" interval={{}} />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <ActionListView name={ALCOHOL_UNIT_ACTION_TYPE} maxEntries={10} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  scrollView: {},
});

export default HistoryView;
