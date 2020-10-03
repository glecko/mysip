import { ALCOHOL_ML_TO_UNITS_CONVERSION, AlcoholicDrinkModel } from './model';
import { capitalize, displayPercentage } from '../../utils/string';

export function getAlcoholUnitsForDrink(drink: AlcoholicDrinkModel) {
  return drink.volume * drink.content * ALCOHOL_ML_TO_UNITS_CONVERSION;
}

export function getDrinkDescription(drink: AlcoholicDrinkModel) {
  return `${capitalize(drink.name)} (${drink.volume} ml - ${displayPercentage(drink.content)})`;
}
