import { RealmEntry } from '../../shared/storage/models';
import { ColorValue } from 'react-native';

export const WEIGHT_STORAGE_KEY = 'weight';
export const GENDER_STORAGE_KEY = 'gender';

export enum UserGender {
  MALE,
  FEMALE
}

export const DEFAULT_USER_WEIGHT = 80;
export const DEFAULT_USER_GENDER = UserGender.MALE;

export interface AlcoholicDrinkModel extends RealmEntry {
  name: string;
  volume: number;
  content: number;
  imageName: string;
  buttonColor: ColorValue;
  sortingIndex: number;
}
