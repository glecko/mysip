import { ColorValue } from 'react-native';

export const ALCOHOL_UNIT_ACTION_TYPE = 'alcohol unit';

export interface AlcoholicDrinkModel {
  name: string;
  volume: number; // in ml
  content: number; // %
  imageUrl?: string;
  buttonColor: ColorValue;
}
