import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import { TimelineOptionModel } from '../configurable-timeline-chart/configurable-timeline-chart.model';

export const MAX_SWIPE_LIMIT = 20;

export interface SwipeableTimelineChartModel {
  type: string;
  intervalOptionData: TimelineOptionModel;
  chartConfig: ChartConfig;
}
