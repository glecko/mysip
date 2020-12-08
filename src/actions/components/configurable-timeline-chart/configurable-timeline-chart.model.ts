import { unitOfTime } from 'moment';
import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import moment from 'moment/moment';
import { currentTimeInterval, getMiddleDate, getMonthWeeksInterval } from '../../../shared/utils/date';
import { IntervalModel } from '../../hooks/aggregation/model';

export interface ConfigurableActionTimelineModel {
  type: string;
  chartConfig: ChartConfig;
}

export interface TimelineOptionModel {
  name: string;
  formatIntervalFn: (aggregation: IntervalModel) => string;
  intervalFn: (offset: number) => IntervalModel | undefined;
  intervalTitleFn: (aggregation: IntervalModel) => string;
  unitOfTime: unitOfTime.Base;
  chartBarWidth: number;
}

export const TIMELINE_CHART_OPTIONS: TimelineOptionModel[] = [
  {
    name: 'W',
    formatIntervalFn: (interval) => moment(interval.start).format('ddd'),
    intervalFn: (offset: number) => currentTimeInterval('week', offset),
    intervalTitleFn: (interval) => `${moment(interval.start).format('D MMM YY')} - ${moment(interval.end).format('D MMM YY')}`,
    unitOfTime: 'days',
    chartBarWidth: 0.75,
  },
  {
    name: 'M',
    formatIntervalFn: (interval) => `${moment(interval.start).format('D')} - ${moment(interval.end).format('D')}`,
    intervalFn: (offset: number) => getMonthWeeksInterval(offset),
    intervalTitleFn: (interval) => {
      const middleDate = getMiddleDate(interval.start as Date, interval.end as Date);
      return `${moment(middleDate).format('MMMM YYYY')}`;
    },
    unitOfTime: 'week',
    chartBarWidth: 1,
  },
  {
    name: 'Y',
    formatIntervalFn: (interval) => moment(interval.start).format('MMM'),
    intervalFn: (offset: number) => currentTimeInterval('year', offset),
    intervalTitleFn: (interval) => `${moment(interval.start).format('YYYY')}`,
    unitOfTime: 'month',
    chartBarWidth: 0.4,
  },
  {
    name: 'A',
    formatIntervalFn: (interval) => moment(interval.start).format('MMM YY'),
    intervalTitleFn: () => 'All time',
    intervalFn: () => undefined,
    unitOfTime: 'month',
    chartBarWidth: 0.5,
  },
];
