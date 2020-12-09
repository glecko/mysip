import { capitalize, displayPercentage } from '../../shared/utils/string';
import { AlcoholicDrinkModel } from '../../settings/models/model';

export function getDrinkDisplayVolume(drink: AlcoholicDrinkModel) {
  return `${drink.volume} ml`;
}

export function getDrinkDisplayContent(drink: AlcoholicDrinkModel) {
  return displayPercentage(drink.content, 0);
}

export function getDrinkDisplayName(drink: AlcoholicDrinkModel) {
  return `${capitalize(drink.name)}`;
}

export function getDrinkDescription(drink: AlcoholicDrinkModel) {
  return `${getDrinkDisplayName(drink)} (${getDrinkDisplayVolume(drink)} - ${getDrinkDisplayContent(drink)})`;
}
