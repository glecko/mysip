import { Results, Object } from 'realm';
import { RealmService } from '../../storage/realm';
import { ActionModel, ActionSchema } from '../../storage/actions/schema';
import { ActionsAgregatedByDateModel, IntervalModel } from './model';
import moment from 'moment';

export function getActions(filterType: string, limit?: number, interval?: IntervalModel): Results<ActionModel & Object> {
  const actions = RealmService.realmInstance.objects<ActionModel>(
    ActionSchema.name
  );
  let query = `type = "${filterType}" SORT(date DESC)`;
  if (limit) query += ` LIMIT(${limit})`;
  let result = actions.filtered(query);
  if (interval) {
    if (interval.start) result = result.filtered('date >= $0', interval.start);
    if (interval.end) result = result.filtered('date <= $0', interval.end);
  }
  return result;
}

export function aggregatedActionsByDate(actions: Results<ActionModel>, aggregationFormat: string): ActionsAgregatedByDateModel[] {
  const sortedActions = actions.filter(() => true).sort((actionA, actionB) => actionA.date.getTime() - actionB.date.getTime());
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
