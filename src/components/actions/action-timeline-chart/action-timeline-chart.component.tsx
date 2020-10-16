import React, { useEffect, useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { Results } from 'realm';
import { aggregatedActionsByDate, getActions } from '../../../hooks/actions/hooks';
import { ActionTimelineChartModel } from './action-timeline-chart.model';
import { ActionModel } from '../../../storage/actions/schema';

function getChartActions(props: ActionTimelineChartModel) {
  return getActions(props.type, undefined, props.interval);
}

function getChartData(actions: Results<ActionModel>, aggregationFormat: string): ChartData {
  const aggregatedActions = aggregatedActionsByDate(actions, aggregationFormat);
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
  }, [props.type]);

  const chartConfig = {
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
    fillShadowGradientOpacity: 0.8,
    decimalPlaces: 1,
  };

  const data = getChartData(actions, props.aggregationFormat);
  return (
    <View>
      <BarChart
        data={data}
        chartConfig={chartConfig}
        width={Dimensions.get('window').width}
        height={220}
        fromZero
      />
    </View>
  );
};

export default ActionTimelineChart;
