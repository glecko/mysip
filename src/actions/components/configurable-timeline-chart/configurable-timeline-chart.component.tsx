import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  ConfigurableActionTimelineModel,
  TIMELINE_CHART_OPTIONS,
  TimelineOptionModel
} from './configurable-timeline-chart.model';
import ActionTimelineChart from '../timeline-chart/action-timeline-chart.component';
import styles from './configurable-timeline-chart.styles';

const ConfigurableActionTimelineChart = (props: ConfigurableActionTimelineModel) => {
  const [intervalOptionData, setIntervalOptionData] = useState(TIMELINE_CHART_OPTIONS[1]);
  const [interval, setCurrentInterval] = useState(intervalOptionData.intervalFn());

  const buttonPress = (option: TimelineOptionModel) => {
    setCurrentInterval(option.intervalFn());
    setIntervalOptionData(option);
  };

  const buttons = TIMELINE_CHART_OPTIONS.map((option) => (
    <TouchableOpacity
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
      <ActionTimelineChart
        type={props.type}
        chartConfig={props.chartConfig}
        formatIntervalFn={intervalOptionData.formatIntervalFn}
        unitOfTime={intervalOptionData.unitOfTime}
        interval={interval}
        chartBarWidth={intervalOptionData.chartBarWidth}
      />
    </View>
  );
};

export default ConfigurableActionTimelineChart;
