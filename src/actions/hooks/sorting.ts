import { Results } from "realm";
import { ActionModel } from '../models/schema';

export function sortActionsByDate(actions: Results<ActionModel>): ActionModel[] {
  return actions.filter(() => true).sort((actionA, actionB) => actionA.date.getTime() - actionB.date.getTime());
}

export function getFirstAction(actions: Results<ActionModel>): ActionModel | undefined {
  const sortedActions = sortActionsByDate(actions);
  return sortedActions[0];
}

export function getLastAction(actions: Results<ActionModel>): ActionModel | undefined {
  const sortedActions = sortActionsByDate(actions);
  return sortedActions.length > 0 ? sortedActions[sortedActions.length - 1] : undefined;
}
