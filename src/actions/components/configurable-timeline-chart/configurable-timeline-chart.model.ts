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
  chartBarWidth: number;
}

export const TIMELINE_CHART_OPTIONS: TimelineOptionModel[] = [
  {
    name: 'W',
    formatIntervalFn: (interval) => moment(interval.start).format('ddd'),
    intervalFn: () => currentTimeInterval('week'),
    unitOfTime: 'days',
    chartBarWidth: 0.75,
  },
  {
    name: 'M',
    formatIntervalFn: (interval) => `${moment(interval.start).format('D')} - ${moment(interval.end).format('D')}`,
    intervalFn: () => currentTimeInterval('month'),
    unitOfTime: 'week',
    chartBarWidth: 1,
  },
  {
    name: 'Y',
    formatIntervalFn: (interval) => moment(interval.start).format('MMM'),
    intervalFn: () => currentTimeInterval('year'),
    unitOfTime: 'month',
    chartBarWidth: 0.4,
  },
  {
    name: 'A',
    formatIntervalFn: (interval) => moment(interval.start).format('MMM YY'),
    intervalFn: () => {},
    unitOfTime: 'month',
    chartBarWidth: 0.5,
  },
];
