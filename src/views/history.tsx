import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import ActionListView from '../actions/components/action-list-view/action-list-view.component';
import ConfigurableActionTimelineChart from '../actions/components/configurable-timeline-chart/configurable-timeline-chart.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../drinks/models/model';

const HistoryView = () => (
  <View>
    <ConfigurableActionTimelineChart
      type={ALCOHOL_UNIT_ACTION_TYPE}
      chartConfig={{
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
        fillShadowGradientOpacity: 0.8,
        decimalPlaces: 1,
        barPercentage: 0.75,
      }}
    />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <ActionListView name={ALCOHOL_UNIT_ACTION_TYPE} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  scrollView: {},
});

export default HistoryView;
