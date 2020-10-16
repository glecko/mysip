import React, { useEffect, useState } from 'react';
import { ActionTimelineChartModel } from './action-timeline-chart.model';
import { getActions } from '../../../hooks/actions/hooks';
import { BarChart } from 'react-native-chart-kit';
import { View } from 'react-native';
import { ActionModel } from '../../../storage/actions/schema';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { Results } from 'realm';

function getChartActions(props: ActionTimelineChartModel) {
  return getActions(props.type);
}

function getChartData(actions: Results<ActionModel>): ChartData {
  return {
    labels: ['Mon', 'Tue'],
    datasets: [
      {
        data: [20, 45]
      }
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
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    useShadowColorFromDataset: false // optional
  };

  const data = getChartData(actions);
  return (
    <View>
      <BarChart
        data={data}
        chartConfig={chartConfig}
        width={500}
        height={200}
        yAxisLabel={props.type}
        verticalLabelRotation={30}
        fromZero
      />
    </View>
  );
};

export default ActionTimelineChart;
