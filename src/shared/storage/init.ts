import { addDefaultAlcoholicDrinks } from '../../drinks/models/init';

export const REALM_INIT_FUNCTIONS: ((realmInstance: Realm) => Promise<void>)[] = [
  addDefaultAlcoholicDrinks
];
