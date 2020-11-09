import { Results } from 'realm';
import { ActionModel } from '../../models/schema';
import { ActionsAgregatedByDateModel } from './model';
import moment from 'moment';

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
