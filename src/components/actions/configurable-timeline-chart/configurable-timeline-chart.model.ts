import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import { currentTimeInterval } from '../../../utils/date';

export interface ConfigurableActionTimelineModel {
  type: string;
  chartConfig: ChartConfig;
}

export interface TimelineOptionModel {
  name: string;
  aggregationFormat: string;
  intervalFn: Function;
}

export const TIMELINE_CHART_OPTIONS: TimelineOptionModel[] = [
  { name: 'W', aggregationFormat: 'ddd', intervalFn: () => currentTimeInterval('week') },
  { name: 'M', aggregationFormat: 'D', intervalFn: () => currentTimeInterval('month') },
  { name: 'Y', aggregationFormat: 'MMM', intervalFn: () => currentTimeInterval('year') },
  { name: 'A', aggregationFormat: 'MMM YY', intervalFn: () => {} },
];
