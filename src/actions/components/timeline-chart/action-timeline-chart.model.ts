import { IntervalModel } from '../../hooks/aggregation/model';
import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';

export interface ActionTimelineChartModel {
  type: string;
  interval: IntervalModel;
  aggregationFormat: string;
  chartConfig: ChartConfig;
}
