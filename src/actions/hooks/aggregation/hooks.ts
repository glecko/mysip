import { Results } from 'realm';
import moment from 'moment';
import { ActionsAgregatedByDateModel, IntervalModel } from './model';
import { uniqueAggregationsInInterval } from '../../../shared/utils/date';
import { sortActionsByDate } from '../sorting';
import { ActionModel } from '../../models/models';

export function aggregatedActionsByDate(actions: Results<ActionModel>, aggregationFormat: string): ActionsAgregatedByDateModel[] {
  const sortedActions = sortActionsByDate(actions);
  return sortedActions.reduce((acc, action) => {
    const formattedDate = moment(action.date).format(aggregationFormat);
    const existingAggregation = acc.find((aggregation) => aggregation.formattedDate === formattedDate);
    if (existingAggregation) {
      existingAggregation.actions.push(action);
    } else {
      acc.push({ formattedDate, actions: [action] });
    }
    return acc;
  }, [] as ActionsAgregatedByDateModel[]);
}

export function aggregatedActionsInInterval(
  actions: Results<ActionModel>,
  aggregationFormat: string,
  interval: IntervalModel
): ActionsAgregatedByDateModel[] {
  const aggregatedActions = aggregatedActionsByDate(actions, aggregationFormat);
  if (!interval.start || !interval.end) return aggregatedActions;
  const aggregations = uniqueAggregationsInInterval(interval, aggregationFormat);
  return aggregations.map((formattedDate: string) => {
    const dateActions = aggregatedActions.find((aggrAction) => aggrAction.formattedDate === formattedDate);
    return { formattedDate, actions: dateActions ? dateActions.actions : [] };
  });
}
