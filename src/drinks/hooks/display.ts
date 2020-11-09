import { ALCOHOL_ML_TO_UNITS_CONVERSION, AlcoholicDrinkModel } from '../models/model';
import { capitalize, displayPercentage } from '../../shared/utils/string';

export function getAlcoholUnitsForDrink(drink: AlcoholicDrinkModel) {
  return drink.volume * drink.content * ALCOHOL_ML_TO_UNITS_CONVERSION;
}

export function getDrinkDisplayVolume(drink: AlcoholicDrinkModel) {
  return `${drink.volume} ml`;
}

export function getDrinkDisplayContent(drink: AlcoholicDrinkModel) {
  return displayPercentage(drink.content);
}

export function getDrinkDisplayName(drink: AlcoholicDrinkModel) {
  return `${capitalize(drink.name)}`;
}

export function getDrinkDescription(drink: AlcoholicDrinkModel) {
  return `${getDrinkDisplayName(drink)} (${getDrinkDisplayVolume(drink)} - ${getDrinkDisplayContent(drink)})`;
}
