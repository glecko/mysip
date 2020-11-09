export const ALCOHOL_UNIT_ACTION_TYPE = 'alcohol unit';

export const ALCOHOL_ML_TO_UNITS_CONVERSION = 0.10;

export interface AlcoholicDrinkModel {
  name: string;
  volume: number; // in ml
  content: number; // %
  imageUrl?: string;
}
