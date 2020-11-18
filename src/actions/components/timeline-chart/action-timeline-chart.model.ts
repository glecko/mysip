import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import { IntervalModel } from '../../hooks/aggregation/model';

export interface ActionTimelineChartModel {
  type: string;
  interval: IntervalModel;
  aggregationFormat: string;
  chartConfig: ChartConfig;
}
