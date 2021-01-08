import { RealmEntry } from '../../shared/storage/models';

export const WEIGHT_STORAGE_KEY = 'weight';
export const GENDER_STORAGE_KEY = 'gender';

export const DEFAULT_DRINKS_INITIALIZED_KEY = 'default_drinks_initialized';

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
  buttonColor: string;
  sortingIndex: number;
}
