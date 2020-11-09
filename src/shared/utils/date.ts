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
