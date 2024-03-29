import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import { unitOfTime } from 'moment';
import { IntervalModel } from '../../hooks/aggregation/model';

export const ACTION_TIMELINE_CHART_HEIGHT = 220;

export interface ActionTimelineChartModel {
  type: string;
  interval?: IntervalModel;
  formatIntervalFn: (aggregation: IntervalModel) => string;
  chartConfig: ChartConfig;
  unitOfTime: unitOfTime.Base;
  chartBarWidth: number;
}
