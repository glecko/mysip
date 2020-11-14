import 'react-native-get-random-values';
import { Results, Object } from 'realm';
import { v4 as uuidv4 } from 'uuid';
import { RealmService } from '../../shared/storage/realm';
import { ActionModel, ActionSchema } from '../models/schema';
import { IntervalModel } from './model';
import { ActionStub } from '../models/models';

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

export function createActionFromStub(
  actionStub: ActionStub
): ActionModel {
  return {
    id: actionStub.id ? actionStub.id : uuidv4(),
    date: actionStub.date ? actionStub.date : new Date(),
    type: actionStub.type,
    amount: actionStub.amount,
    subtype: actionStub.subtype,
    note: actionStub.note,
  };
}

export function getLastAction(): ActionModel {
  return RealmService.getLastModelEntry<ActionModel>(
    ActionSchema.name,
    'date'
  );
}

export function createEmptyAction(type: string, amount: number, subtype: string) {
  const action = createActionModel(
    type,
    amount,
    subtype,
    ''
  );
  RealmService.create(ActionSchema.name, action);
}

export function deleteAction(action: ActionModel) {
  RealmService.deleteObjectById(ActionSchema.name, action.id);
}

export function deleteLastAction(type: string) {
  RealmService.deleteObjectsByQuery(ActionSchema.name, `type = "${type}" SORT(date DESC) LIMIT(1)`);
};

export function upsertAction(actionStub: ActionStub) {
  const action = createActionFromStub(actionStub);
  RealmService.upsert(ActionSchema.name, action);
}

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