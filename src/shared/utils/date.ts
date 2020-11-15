import moment, { unitOfTime } from 'moment';
import { IntervalModel } from '../../actions/hooks/aggregation/model';

export function sameDay(dateA: Date, dateB: Date) {
  return dateA.getDate() === dateB.getDate() && dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear();
}

export function currentTimeInterval(unit: unitOfTime.StartOf): IntervalModel {
  return {
    start: moment().startOf(unit).toDate(),
    end: moment().endOf(unit).toDate(),
  };
}

export function uniqueDatesInInterval(interval: IntervalModel): Date[] {
  const start = moment(interval.start);
  const end = moment(interval.end);
  const result = [];

  while (start.isSameOrBefore(end)) {
    result.push(start.toDate());
    start.add(1, 'days');
  }
  return result;
}

export function uniqueAggregationsInInterval(interval: IntervalModel, aggregationFormat: string): string[] {
  return uniqueDatesInInterval(interval).reduce((acc: string[], date) => {
    const formattedDate = moment(date).format(aggregationFormat);
    if (acc.indexOf(formattedDate) === -1) acc.push(formattedDate);
    return acc;
  }, []);
}
