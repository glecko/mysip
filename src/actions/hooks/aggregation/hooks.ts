import { Results } from 'realm';
import { unitOfTime } from 'moment';
import { ActionsAgregatedByTimeUnitModel, IntervalModel } from './model';
import { sortActionsByDate } from '../sorting';
import { ActionModel } from '../../models/models';
import { timeUnitAggregationsInInterval } from '../../../shared/utils/date';

export function aggregatedActionsInInterval(
  actions: ActionModel[],
  interval: IntervalModel,
  unit: unitOfTime.Base,
  formatIntervalFn: (aggregation: IntervalModel) => string,
): ActionsAgregatedByTimeUnitModel[] {
  const aggregatedIntervals = timeUnitAggregationsInInterval(interval, unit, formatIntervalFn);
  return aggregatedIntervals.map((aggregation) => {
    const intervalActions = actions.filter((action) => aggregation.start <= action.date && action.date <= aggregation.end);
    return { ...aggregation, actions: intervalActions };
  });
}

export function aggregateActions(
  actions: Results<ActionModel>,
  formatIntervalFn: (aggregation: IntervalModel) => string,
  interval: IntervalModel,
  unit: unitOfTime.Base
): ActionsAgregatedByTimeUnitModel[] {
  const sortedActions = sortActionsByDate(actions);
  const fullInterval = { ...interval };
  if (sortedActions.length > 0) {
    if (!fullInterval.start) fullInterval.start = new Date(sortedActions[0].date);
    if (!fullInterval.end) fullInterval.end = new Date(sortedActions[sortedActions.length - 1].date);
  }
  return aggregatedActionsInInterval(sortedActions, interval, unit, formatIntervalFn);
}
