import moment, { Moment, unitOfTime } from 'moment';
import { IntervalModel } from '../../actions/hooks/aggregation/model';
import { TimeUnitAggregationsModel } from '../models/date';

export function sameDay(dateA: Date, dateB: Date) {
  return dateA.getDate() === dateB.getDate() && dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear();
}

export function getTimeDistance(dateA: Date, dateB: Date): moment.Duration {
  const momentA = moment(dateA);
  const momentB = moment(dateB);
  return moment.duration(momentB.diff(momentA));
}

export function currentTimeInterval(unit: unitOfTime.DurationConstructor, unitOffset: number): IntervalModel {
  const start = moment().add(unitOffset, unit).startOf(unit).toDate();
  const end = moment().add(unitOffset, unit).endOf(unit).toDate();
  return { start, end };
}

export function getMiddleDate(dateA: Date, dateB: Date) {
  const time = (dateA.getTime() + dateB.getTime()) / 2;
  return new Date(time);
}

export function getMonthWeeksInterval(monthsOffset: number): IntervalModel {
  const start = moment().add(monthsOffset, 'month').startOf('month').startOf('week');
  const end = moment().add(monthsOffset, 'month').endOf('month').endOf('week');
  return {
    start: start.toDate(),
    end: end.toDate(),
  };
}

export function uniqueTimeUnitsInInterval(interval: IntervalModel, unit: unitOfTime.Base): Moment[] {
  const start = moment(interval.start);
  const end = moment(interval.end);
  const result = [];

  while (start.isSameOrBefore(end)) {
    result.push(moment(start));
    start.add(1, unit);
  }
  return result;
}

export function timeUnitAggregationsInInterval(
  interval: IntervalModel,
  unit: unitOfTime.Base,
  formatIntervalFn: (aggregation: IntervalModel) => string
): TimeUnitAggregationsModel[] {
  return uniqueTimeUnitsInInterval(interval, unit).map((timeUnit) => {
    const timeUnitInterval = {
      start: timeUnit.startOf(unit).toDate(),
      end: timeUnit.endOf(unit).toDate(),
    };
    return { ...timeUnitInterval, formattedName: formatIntervalFn(timeUnitInterval) };
  });
}
