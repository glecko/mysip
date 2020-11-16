import { Results } from 'realm';
import { ActionModel, ActionSchema } from './schema';

export function actionMigrationFunction(migrationFn: (existingActions: Results<ActionModel>, newActions: Results<ActionModel>) => void) {
  return (oldRealm: Realm, newRealm: Realm) => {
    const existingActions = oldRealm.objects<ActionModel>(ActionSchema.name);
    const newActions = newRealm.objects<ActionModel>(ActionSchema.name);
    migrationFn(existingActions, newActions);
  };
}

export function addRegisterDate(existingActions: Results<ActionModel>, newActions: Results<ActionModel>) {
  newActions.forEach((action) => {
    action.registerDate = action.date;
  });
}
