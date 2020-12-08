import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { Text, View } from 'react-native';
import {
  MAX_SWIPE_LIMIT,
  SwipeableTimelineChartModel,
} from './swipeable-timeline-chart.model';
import ActionTimelineChart from '../timeline-chart/action-timeline-chart.component';
import styles from './swipeable-timeline-chart.styles';
import { ACTION_TIMELINE_CHART_HEIGHT } from '../timeline-chart/action-timeline-chart.model';
import { IntervalModel } from '../../hooks/aggregation/model';

const SwipeableTimelineChart = (props: SwipeableTimelineChartModel) => {
  const [chartOffsets, setChartOffsets] = useState<number[]>([]);
  const [swiperKey, setSwiperKey] = useState(0);
  const hasInterval = !!props.intervalOptionData.intervalFn(0);

  const renderChart = (offset: number, index: number): JSX.Element => {
    const localInterval = props.intervalOptionData.intervalFn(offset);
    const intervalTitle = props.intervalOptionData.intervalTitleFn(localInterval as IntervalModel);
    return (
      <View style={styles.chartContainer} key={index}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{intervalTitle}</Text>
        </View>
        <ActionTimelineChart
          type={props.type}
          chartConfig={props.chartConfig}
          formatIntervalFn={props.intervalOptionData.formatIntervalFn}
          unitOfTime={props.intervalOptionData.unitOfTime}
          interval={localInterval}
          chartBarWidth={props.intervalOptionData.chartBarWidth}
        />
      </View>
    );
  };

  useEffect(() => {
    if (!hasInterval) {
      setChartOffsets([0]);
      return;
    }
    const offsets = [...Array(MAX_SWIPE_LIMIT + 1).keys()].map((offset) => offset - MAX_SWIPE_LIMIT);
    setChartOffsets(offsets);
    setSwiperKey(new Date().getTime());
  }, [props.intervalOptionData, props.chartConfig, props.type]);

  return (
    <View style={styles.wrapper}>
      <Swiper
        index={hasInterval ? MAX_SWIPE_LIMIT : 0}
        key={swiperKey}
        height={ACTION_TIMELINE_CHART_HEIGHT}
        style={styles.swiper}
        loadMinimal
        showsPagination={false}
        loop={false}
      >
        {chartOffsets.map((offset: number, index: number) => renderChart(offset, index))}
      </Swiper>
    </View>
  );
};

export default SwipeableTimelineChart;
