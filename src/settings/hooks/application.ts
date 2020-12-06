import AsyncStorage from '@react-native-async-storage/async-storage';

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
