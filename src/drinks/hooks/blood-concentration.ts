import { Object, Results } from 'realm';
import { getActions } from '../../actions/hooks/application';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../models/model';
import { sortActionsByDate } from '../../actions/hooks/sorting';
import {
  BODY_METABOLISATION_SPEED,
  FEMALE_GENDER_CONSTANT, MALE_GENDER_CONSTANT,
  MAX_ALCOHOL_ACTIVITY_HOURS
} from '../data/blood-concentration';
import { getTimeDistance } from '../../shared/utils/date';
import { ActionModel } from '../../actions/models/models';
import { UserGender } from '../../settings/models/model';
import { getUserGender, getUserWeight } from '../../settings/hooks/application';
import { getAlcoholGrams } from './format';

export function getBloodActiveDrinks(): Results<ActionModel & Object> {
  const activeDrinksStartDate = new Date();
  activeDrinksStartDate.setHours(activeDrinksStartDate.getHours() - MAX_ALCOHOL_ACTIVITY_HOURS);
  return getActions(ALCOHOL_UNIT_ACTION_TYPE, undefined, { start: activeDrinksStartDate });
}

export function getGenderConstant(gender: UserGender) {
  return gender === UserGender.MALE ? MALE_GENDER_CONSTANT : FEMALE_GENDER_CONSTANT;
}

export function getWidmarkFormulaConcentration(action: ActionModel, weight: number, gender: UserGender) {
  return (100 * getAlcoholGrams(action)) / (weight * 1000 * getGenderConstant(gender));
}

export function calculateWidmarkFormulaDecay(initialConcentration: number, ellapsedHours: number) {
  return Math.max(initialConcentration - ellapsedHours * BODY_METABOLISATION_SPEED, 0);
}

export function getAccumulatedBloodConcentration(sortedActions: ActionModel[], date: Date, weight: number, gender: UserGender): number {
  const lastDrinkAccumulation = sortedActions.reduce((acc, action, index) => {
    const lastAction = sortedActions[index - 1];
    if (!lastAction) return getWidmarkFormulaConcentration(action, weight, gender);

    // From the previous drink until now, subtract the alcohol metabolised by the body
    const hourDistance = getTimeDistance(lastAction.date, action.date).asHours();
    const concentration = calculateWidmarkFormulaDecay(acc, hourDistance);

    // Add the current drink's concentration
    return concentration + getWidmarkFormulaConcentration(action, weight, gender);
  }, 0);

  // The lastDrinkAccumulation now contains the acumulated blood concentration at the moment of the last drink
  // To get the actual concentration at the specified date, we need to subtract the metabolisation since that moment
  const timeSinceLastDrink = getTimeDistance(sortedActions[sortedActions.length - 1].date, date).asHours();
  return calculateWidmarkFormulaDecay(lastDrinkAccumulation, timeSinceLastDrink);
}

export async function getCurrentBloodConcentration(actions: Results<ActionModel & Object>): Promise<number> {
  const weight = await getUserWeight();
  const gender = await getUserGender();
  const sortedActions = sortActionsByDate(actions);
  return getAccumulatedBloodConcentration(sortedActions, new Date(), weight, gender);
}
