import { UserGender } from '../../../drinks/models/model';

export function displayUserGender(gender: UserGender) {
  return gender === UserGender.MALE ? 'Male' : 'Female';
}
