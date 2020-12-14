import { Results } from 'realm';
import { AlcoholicDrinkModel } from '../../settings/models/model';
import { RealmService } from '../../shared/storage/realm';
import { AlcoholicDrinkSchema } from '../../settings/models/schema';

export function sortAlcoholicDrinks(drinks: Results<AlcoholicDrinkModel>) {
  return drinks.filter(() => true).sort((drinkA, drinkB) => drinkA.sortingIndex - drinkB.sortingIndex);
}

export function getAlcoholicDrinks(): Results<AlcoholicDrinkModel> {
  return RealmService.realmInstance.objects<AlcoholicDrinkModel>(
    AlcoholicDrinkSchema.name
  );
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
