import React, { useEffect, useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { Results } from 'realm';
import { aggregateActions } from '../../hooks/aggregation/hooks';
import { ActionTimelineChartModel } from './action-timeline-chart.model';
import { getActions, listenToActionCollection } from '../../hooks/application';
import { IntervalModel } from '../../hooks/aggregation/model';
import { getFirstAction, getLastAction } from '../../hooks/sorting';
import styles from './action-timeline-chart.styles';
import { ActionModel } from '../../models/models';

function getChartData(actions: Results<ActionModel>, props: ActionTimelineChartModel): ChartData {
  const actionsInterval: IntervalModel = {
    start: props.interval?.start ? props.interval.start : getFirstAction(actions)?.date,
    end: props.interval?.end ? props.interval.end : getLastAction(actions)?.date
  };
  const aggregatedActions = aggregateActions(actions, props.formatIntervalFn, actionsInterval, props.unitOfTime);
  const labels = aggregatedActions.map((dateActions) => dateActions.formattedName);
  const amounts = aggregatedActions.map((dateActions) => dateActions.actions.reduce((acc, action) => acc + action.amount, 0));
  return {
    labels,
    datasets: [
      { data: amounts }
    ]
  };
}

const ActionTimelineChart = (props: ActionTimelineChartModel) => {
  const [actions, setActions] = useState(getActions(props.type, undefined, props.interval));

  useEffect(
    () => listenToActionCollection(setActions, props.type, undefined, props.interval),
    [props.type, props.interval, props.unitOfTime, props.formatIntervalFn]
  );

  const data = getChartData(actions, props);
  return (
    <View>
      <BarChart
        data={data}
        chartConfig={props.chartConfig}
        width={Dimensions.get('window').width}
        height={220}
        fromZero
        style={styles.chart}
        yAxisLabel=""
        yAxisSuffix=""
      />
    </View>
  );
};

export default ActionTimelineChart;
