import moment from 'moment';
import { ActionModel } from '../models/models';

export function displayAction(
  action: ActionModel,
  displaySubtype: boolean
): string {
  const dateString = moment(action.date).format('DD/MM/YYYY HH:mm');
  const typeText = `${action.type}${action.amount === 1 ? '' : 's'}`;
  const subTypeText = action.subtype && displaySubtype ? ` (${action.subtype})` : '';
  return `${dateString} - ${action.amount.toFixed(2)} ${typeText}${subTypeText}`;
}
