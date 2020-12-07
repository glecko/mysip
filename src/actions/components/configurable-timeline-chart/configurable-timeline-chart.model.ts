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
  intervalFn: Function;
  intervalTitleFn: (aggregation: IntervalModel) => string;
  unitOfTime: unitOfTime.Base;
  chartBarWidth: number;
}

export const TIMELINE_CHART_OPTIONS: TimelineOptionModel[] = [
  {
    name: 'W',
    formatIntervalFn: (interval) => moment(interval.start).format('ddd'),
    intervalFn: () => currentTimeInterval('week', 0),
    intervalTitleFn: (interval) => `${moment(interval.start).format('D MMM')} - ${moment(interval.end).format('D MMM')}`,
    unitOfTime: 'days',
    chartBarWidth: 0.75,
  },
  {
    name: 'M',
    formatIntervalFn: (interval) => `${moment(interval.start).format('D')} - ${moment(interval.end).format('D')}`,
    intervalFn: () => getMonthWeeksInterval(0),
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
    intervalFn: () => currentTimeInterval('year', 0),
    intervalTitleFn: (interval) => `${moment(interval.start).format('YYYY')}`,
    unitOfTime: 'month',
    chartBarWidth: 0.4,
  },
  {
    name: 'A',
    formatIntervalFn: (interval) => moment(interval.start).format('MMM YY'),
    intervalTitleFn: () => '',
    intervalFn: () => {},
    unitOfTime: 'month',
    chartBarWidth: 0.5,
  },
];
