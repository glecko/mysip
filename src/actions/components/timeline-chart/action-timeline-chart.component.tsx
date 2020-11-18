import React, { useEffect, useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { Results } from 'realm';
import { aggregatedActionsInInterval } from '../../hooks/aggregation/hooks';
import { ActionTimelineChartModel } from './action-timeline-chart.model';
import { getActions } from '../../hooks/application';
import { IntervalModel } from '../../hooks/aggregation/model';
import { getFirstAction, getLastAction } from '../../hooks/sorting';
import styles from './action-timeline-chart.styles';
import { ActionModel } from '../../models/models';

function getChartActions(props: ActionTimelineChartModel) {
  return getActions(props.type, undefined, props.interval);
}

function getChartData(actions: Results<ActionModel>, aggregationFormat: string, interval: IntervalModel): ChartData {
  const actionsInterval: IntervalModel = {
    start: interval?.start ? interval.start : getFirstAction(actions)?.date,
    end: interval?.end ? interval.end : getLastAction(actions)?.date
  };
  const aggregatedActions = aggregatedActionsInInterval(actions, aggregationFormat, actionsInterval);
  const labels = aggregatedActions.map((dateActions) => dateActions.formattedDate);
  const amounts = aggregatedActions.map((dateActions) => dateActions.actions.reduce((acc, action) => acc + action.amount, 0));
  return {
    labels,
    datasets: [
      { data: amounts }
    ]
  };
}

const ActionTimelineChart = (props: ActionTimelineChartModel) => {
  const [actions, setActions] = useState(
    getChartActions(props)
  );

  useEffect(() => {
    const initialActions = getChartActions(props);
    setActions(initialActions);
    initialActions.addListener(() => {
      setActions(getChartActions(props));
    });
  }, [props.type, props.aggregationFormat, props.interval]);

  const data = getChartData(actions, props.aggregationFormat, props.interval);
  return (
    <View>
      <BarChart
        data={data}
        chartConfig={props.chartConfig}
        width={Dimensions.get('window').width}
        height={220}
        fromZero
        withInnerLines={false}
        style={styles.chart}
        yAxisLabel=""
        yAxisSuffix=""
      />
    </View>
  );
};

export default ActionTimelineChart;
