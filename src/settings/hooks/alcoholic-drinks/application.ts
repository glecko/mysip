import { Results } from 'realm';
import { AlcoholicDrinkModel } from '../../models/model';
import { RealmService } from '../../../shared/storage/realm';
import { AlcoholicDrinkSchema } from '../../models/schema';

export function sortAlcoholicDrinks(drinks: Results<AlcoholicDrinkModel>) {
  return drinks.filter(() => true).sort((drinkA, drinkB) => drinkA.sortingIndex - drinkB.sortingIndex);
}

export function getAlcoholicDrinks(): Results<AlcoholicDrinkModel> {
  return RealmService.realmInstance.objects<AlcoholicDrinkModel>(
    AlcoholicDrinkSchema.name
  );
}

export function listenToAlcoholicDrinksCollection(setDrinks: Function) {
  const updateDrinksListener = () => {
    const drinks = getAlcoholicDrinks();
    setDrinks(drinks);
  };

  const drinksCollection = getAlcoholicDrinks();
  drinksCollection.addListener(updateDrinksListener);
  return () => drinksCollection.removeListener(updateDrinksListener);
}
