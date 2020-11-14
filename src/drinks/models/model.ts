import { ColorValue, ImageSourcePropType } from 'react-native';

export const ALCOHOL_UNIT_ACTION_TYPE = 'alcohol unit';

export interface AlcoholicDrinkModel {
  name: string;
  volume: number; // in ml
  content: number; // %
  image?: ImageSourcePropType;
  buttonColor: ColorValue;
}
