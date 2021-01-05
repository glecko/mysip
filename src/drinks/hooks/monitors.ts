import { IntervalModel } from '../../actions/hooks/aggregation/model';
import { INTERVAL_MONITORS_REFRESH_RATE } from '../models/constants';

export function getIntervalUntilPresent(start: Date): IntervalModel {
  const end = new Date();
  // We need to add the interval refresh rate to avoid missing new actions added until the interval refreshes
  end.setSeconds(end.getSeconds() + INTERVAL_MONITORS_REFRESH_RATE);
  return { start, end };
}

export function getTodayInterval(): IntervalModel {
  const start = new Date();
  start.setHours(start.getHours() - 24);
  return getIntervalUntilPresent(start);
}

export function getLastWeekInterval(): IntervalModel {
  const start = new Date();
  start.setDate(start.getDate() - 7);
  return getIntervalUntilPresent(start);
}
