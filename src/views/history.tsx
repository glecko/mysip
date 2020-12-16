import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import ActionListView from '../actions/components/action-list-view/action-list-view.component';
import ConfigurableActionTimelineChart from '../actions/components/configurable-timeline-chart/configurable-timeline-chart.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../drinks/models/constants';
import { DRINK_EDIT_DIALOG_AMOUNT_PLACEHOLDER, DRINK_EDIT_DIALOG_SUBTYPE_PLACEHOLDER } from '../drinks/data/strings';

const styles = StyleSheet.create({
  scrollView: {},
  container: { flex: 1 }
});

const HistoryView = () => (
  <View style={styles.container}>
    <ConfigurableActionTimelineChart
      type={ALCOHOL_UNIT_ACTION_TYPE}
      chartConfig={{
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
        fillShadowGradientOpacity: 0.8,
        decimalPlaces: 1,
      }}
    />
    <ScrollView style={styles.scrollView}>
      <ActionListView
        name={ALCOHOL_UNIT_ACTION_TYPE}
        dialog={{
          amountPlaceholder: DRINK_EDIT_DIALOG_AMOUNT_PLACEHOLDER,
          subtypePlaceholder: DRINK_EDIT_DIALOG_SUBTYPE_PLACEHOLDER
        }}
      />
    </ScrollView>
  </View>
);

export default HistoryView;
