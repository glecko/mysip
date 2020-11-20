import { unitOfTime } from 'moment';
import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import moment from 'moment/moment';
import { currentTimeInterval } from '../../../shared/utils/date';
import { IntervalModel } from '../../hooks/aggregation/model';

export interface ConfigurableActionTimelineModel {
  type: string;
  chartConfig: ChartConfig;
}

export interface TimelineOptionModel {
  name: string;
  formatIntervalFn: (aggregation: IntervalModel) => string;
  intervalFn: Function;
  unitOfTime: unitOfTime.Base;
}

export const TIMELINE_CHART_OPTIONS: TimelineOptionModel[] = [
  {
    name: 'W',
    formatIntervalFn: (interval) => moment(interval.start).format('ddd'),
    intervalFn: () => currentTimeInterval('week'),
    unitOfTime: 'days'
  },
  {
    name: 'M',
    formatIntervalFn: (interval) => `${moment(interval.start).format('D')} - ${moment(interval.end).format('D')}`,
    intervalFn: () => currentTimeInterval('month'),
    unitOfTime: 'week'
  },
  {
    name: 'Y',
    formatIntervalFn: (interval) => moment(interval.start).format('MMM'),
    intervalFn: () => currentTimeInterval('year'),
    unitOfTime: 'month'
  },
  {
    name: 'A',
    formatIntervalFn: (interval) => moment(interval.start).format('MMM YY'),
    intervalFn: () => {},
    unitOfTime: 'month'
  },
];
