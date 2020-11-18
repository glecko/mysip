import { Results } from 'realm';
import { ActionSchema } from './schema';
import { ActionModel } from './models';

export function actionMigrationFunction(migrationFn: (existingActions: Results<ActionModel>, newActions: Results<ActionModel>) => void) {
  return (oldRealm: Realm, newRealm: Realm) => {
    const existingActions = oldRealm.objects<ActionModel>(ActionSchema.name);
    const newActions = newRealm.objects<ActionModel>(ActionSchema.name);
    migrationFn(existingActions, newActions);
  };
}

export function addRegisterDate(existingActions: Results<ActionModel>, newActions: Results<ActionModel>) {
  newActions.forEach((action) => {
    // eslint-disable-next-line no-param-reassign
    action.registerDate = action.date;
  });
}
