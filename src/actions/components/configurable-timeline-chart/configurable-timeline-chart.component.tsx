import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  ConfigurableActionTimelineModel,
  TIMELINE_CHART_OPTIONS,
  TimelineOptionModel
} from './configurable-timeline-chart.model';
import styles from './configurable-timeline-chart.styles';
import SwipeableTimelineChart from '../swipeable-timeline-chart/swipeable-timeline-chart.component';

const ConfigurableActionTimelineChart = (props: ConfigurableActionTimelineModel) => {
  const [intervalOptionData, setIntervalOptionData] = useState(TIMELINE_CHART_OPTIONS[1]);

  const buttonPress = (option: TimelineOptionModel) => {
    setIntervalOptionData(option);
  };

  const buttons = TIMELINE_CHART_OPTIONS.map((option, index) => (
    <TouchableOpacity
      key={index.toString()}
      style={option.name === intervalOptionData.name ? styles.activeButton : styles.button}
      onPress={() => buttonPress(option)}
    >
      <Text style={styles.buttonText}>{option.name}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {buttons}
      </View>
      <SwipeableTimelineChart
        type={props.type}
        intervalOptionData={intervalOptionData}
        chartConfig={props.chartConfig}
      />
    </View>
  );
};

export default ConfigurableActionTimelineChart;
