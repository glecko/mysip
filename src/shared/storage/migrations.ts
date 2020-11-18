import { ActionSchema } from '../../actions/models/schema';
import { actionMigrationFunction, addRegisterDate } from '../../actions/models/migrations';

export const REALM_SCHEMAS: Realm.Configuration[] = [
  { schema: [ActionSchema], schemaVersion: 1, migration: actionMigrationFunction(addRegisterDate) },
];
