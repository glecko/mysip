import { ActionModel } from '../../actions/models/models';
import { ALCOHOL_ML_TO_UNITS_CONVERSION } from '../data/constants';
import { AlcoholicDrinkModel } from '../models/model';

export function getAlcoholGrams(action: ActionModel): number {
  return (action.amount / ALCOHOL_ML_TO_UNITS_CONVERSION);
}

export function getAlcoholUnitsForDrink(drink: AlcoholicDrinkModel) {
  return drink.volume * drink.content * ALCOHOL_ML_TO_UNITS_CONVERSION;
}
