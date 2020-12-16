import { Object, Results } from 'realm';
import { getActions } from '../../actions/hooks/application';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../models/constants';
import { sortActionsByDate } from '../../actions/hooks/sorting';
import {
  BODY_METABOLISATION_SPEED,
  FEMALE_GENDER_CONSTANT, MALE_GENDER_CONSTANT,
  MAX_ALCOHOL_ACTIVITY_HOURS
} from '../data/blood-concentration';
import { getTimeDistance } from '../../shared/utils/date';
import { ActionModel } from '../../actions/models/models';
import { UserGender } from '../models/model';
import { getUserGender, getUserWeight } from '../../settings/hooks/health-settings/application';
import { getAlcoholGrams } from './format';
import { getIntervalUntilPresent } from '../components/interval-monitors-container/interval-monitors-container.component';

/*
  Returns a collection of drinks (actions) that are recent enough as to possibly still be active in the user's blood.
*/
export function getBloodActiveDrinks(): Results<ActionModel & Object> {
  const activeDrinksStartDate = new Date();
  activeDrinksStartDate.setHours(activeDrinksStartDate.getHours() - MAX_ALCOHOL_ACTIVITY_HOURS);
  const interval = getIntervalUntilPresent(activeDrinksStartDate);
  return getActions(ALCOHOL_UNIT_ACTION_TYPE, undefined, interval);
}

export function getGenderConstant(gender: UserGender) {
  return gender === UserGender.MALE ? MALE_GENDER_CONSTANT : FEMALE_GENDER_CONSTANT;
}

/*
  Returns the blood concentration a certain alcoholic drink (action) adds
  to the blood of an individual of a given weight and gender. (in grams / liter)
*/
export function getWidmarkFormulaConcentration(action: ActionModel, weight: number, gender: UserGender): number {
  return (getAlcoholGrams(action)) / (weight * getGenderConstant(gender));
}

/*
  Given a starting alcohol blood concentration (in grams / liter), this function returns the
  remaining blood concentration after a certain amount of hours.
*/
export function calculateWidmarkFormulaDecay(initialConcentration: number, ellapsedHours: number): number {
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

/* Returns the alcohol blood concentration of the user at a given time, in grams per liter */
export async function getCurrentBloodConcentration(actions: Results<ActionModel & Object>): Promise<number> {
  if (actions.length === 0) return 0;
  const weight = await getUserWeight();
  const gender = await getUserGender();
  const sortedActions = sortActionsByDate(actions);
  return getAccumulatedBloodConcentration(sortedActions, new Date(), weight, gender);
}
