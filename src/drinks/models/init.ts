import AsyncStorage from '@react-native-async-storage/async-storage';
import { AlcoholicDrinkSchema } from './schema';
import { DEFAULT_APP_DRINKS } from '../data/default-drinks';
import { DEFAULT_DRINKS_INITIALIZED_KEY } from './model';

export async function addDefaultAlcoholicDrinks(realmInstance: Realm) {
  const defaultDrinksInitialized = await AsyncStorage.getItem(DEFAULT_DRINKS_INITIALIZED_KEY);
  if (defaultDrinksInitialized) return;
  // Just in case, someone is updating from an older version and does not have the DEFAULT_DRINKS_INITIALIZED_KEY set
  // but has drinks already created, we do not want to alter the database in cases where there is data already present
  if (realmInstance.objects(AlcoholicDrinkSchema.name).length > 0) return;
  realmInstance.write(() => {
    DEFAULT_APP_DRINKS.forEach((drink) => {
      realmInstance.create(AlcoholicDrinkSchema.name, drink, Realm.UpdateMode.All);
    });
  });
  await AsyncStorage.setItem(DEFAULT_DRINKS_INITIALIZED_KEY, 'YES');
}
