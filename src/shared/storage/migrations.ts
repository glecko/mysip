import { ActionSchema } from '../../actions/models/schema';
import { actionMigrationFunction, addRegisterDate } from '../../actions/models/migrations';
import { AlcoholicDrinkSchema } from '../../drinks/models/schema';

export const REALM_SCHEMAS: Realm.Configuration[] = [
  { schema: [ActionSchema], schemaVersion: 1, migration: actionMigrationFunction(addRegisterDate) },
  { schema: [ActionSchema, AlcoholicDrinkSchema], schemaVersion: 2, migration: undefined },
];
