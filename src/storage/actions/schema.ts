import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export function displayAction(
  action: ActionModel,
  displaySubtype: boolean
): string {
  const dateString = moment(action.date).format('DD/MM/YYYY HH:mm');
  const typeText = `${action.type}${action.amount === 1 ? '' : 's'}`;
  const subTypeText = action.subtype && displaySubtype ? ` (${action.subtype})` : '';
  return `${dateString} - ${action.amount.toFixed(2)} ${typeText}${subTypeText}`;
}

export interface ActionModel {
  id: string;
  date: Date;
  amount: number;
  type: string;
  subtype: string;
  note?: string;
}

export function createActionModel(
  type: string,
  amount: number,
  subtype: string,
  note: string
): ActionModel {
  return {
    id: uuidv4(),
    date: new Date(),
    type,
    amount,
    subtype,
    note,
  };
}

export const ActionSchema = {
  name: 'Action',
  primaryKey: 'id',
  properties: {
    id: 'string',
    date: 'date',
    amount: 'float',
    type: 'string',
    subtype: 'string',
    note: 'string?',
  },
};
