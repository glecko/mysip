import { Results } from 'realm';
import { AlcoholicDrinkModel } from '../models/model';
import { RealmService } from '../../shared/storage/realm';
import { AlcoholicDrinkSchema } from '../models/schema';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_NEW_DRINK_BUTTON_COLOR, DEFAULT_NEW_DRINK_IMAGE_NAME } from '../data/strings';

export function sortAlcoholicDrinks(drinks: Results<AlcoholicDrinkModel>) {
  return drinks.filter(() => true).sort((drinkA, drinkB) => drinkA.sortingIndex - drinkB.sortingIndex);
}

export function getAlcoholicDrinks(): Results<AlcoholicDrinkModel> {
  return RealmService.realmInstance.objects<AlcoholicDrinkModel>(
    AlcoholicDrinkSchema.name
  );
}

export function getLastDrinkSortingIndex(): number {
  const drinks = getAlcoholicDrinks();
  return drinks.reduce((acc, drink) => Math.max(acc, drink.sortingIndex), 0);
}

export function createEmptyAlcoholicDrink(): AlcoholicDrinkModel {
  const sortingIndex = getLastDrinkSortingIndex();
  return {
    id: uuidv4(),
    name: '',
    volume: 0,
    content: 0,
    imageName: DEFAULT_NEW_DRINK_IMAGE_NAME,
    buttonColor: DEFAULT_NEW_DRINK_BUTTON_COLOR,
    sortingIndex,
  };
}

export function upsertAlcoholicDrink(drink: AlcoholicDrinkModel) {
  RealmService.upsert<AlcoholicDrinkModel>(AlcoholicDrinkSchema.name, drink);
}

export function deleteAlcoholicDrink(drink: AlcoholicDrinkModel) {
  RealmService.deleteObjectById(AlcoholicDrinkSchema.name, drink.id);
}

export function listenToAlcoholicDrinksCollection(setDrinks: Function) {
  const updateDrinksListener = () => {
    const drinks = getAlcoholicDrinks();
    const sortedDrinks = sortAlcoholicDrinks(drinks);
    setDrinks(sortedDrinks);
  };

  const drinksCollection = getAlcoholicDrinks();
  drinksCollection.addListener(updateDrinksListener);
  return () => drinksCollection.removeListener(updateDrinksListener);
}
