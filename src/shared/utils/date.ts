import moment, { Moment, unitOfTime } from 'moment';
import { IntervalModel } from '../../actions/hooks/aggregation/model';
import { TimeUnitAggregationsModel } from '../models/date';

export function sameDay(dateA: Date, dateB: Date) {
  return dateA.getDate() === dateB.getDate() && dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear();
}

export function currentTimeInterval(unit: unitOfTime.StartOf): IntervalModel {
  return {
    start: moment().startOf(unit).toDate(),
    end: moment().endOf(unit).toDate(),
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
