import { AlcoholicDrinkSchema } from './schema';
import { DEFAULT_APP_DRINKS } from '../data/default-drinks';

export function addDefaultAlcoholicDrinks() {
  return (oldRealm: Realm, newRealm: Realm) => {
    DEFAULT_APP_DRINKS.forEach((drink) => {
      newRealm.create(AlcoholicDrinkSchema.name, drink, Realm.UpdateMode.All);
    });
  };
}
