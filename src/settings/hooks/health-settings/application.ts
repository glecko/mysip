import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DEFAULT_USER_GENDER,
  DEFAULT_USER_WEIGHT,
  GENDER_STORAGE_KEY,
  UserGender,
  WEIGHT_STORAGE_KEY
} from '../../models/model';

export async function saveHealthParameter(key: string, value: number): Promise<void> {
  return AsyncStorage.setItem(key, value.toString());
}

export async function readHealthParameter(key: string, defaultValue: number): Promise<number> {
  const value = await AsyncStorage.getItem(key);
  if (value !== null) {
    if (Number.isNaN(value)) {
      throw Error(`Invalid health parameter stored for key ${key}: '${value}'.`);
    }
    return parseFloat(value);
  }
  return defaultValue;
}

export async function getUserGender(): Promise<UserGender> {
  return readHealthParameter(GENDER_STORAGE_KEY, DEFAULT_USER_GENDER);
}

export async function getUserWeight(): Promise<number> {
  return readHealthParameter(WEIGHT_STORAGE_KEY, DEFAULT_USER_WEIGHT);
}
