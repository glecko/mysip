import { UserGender } from '../models/model';

export function displayUserGender(gender: UserGender) {
  return gender === UserGender.MALE ? 'Male' : 'Female';
}
