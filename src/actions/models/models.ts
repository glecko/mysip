import { Overwrite } from '../../shared/utils/types';
import { RealmEntry } from '../../shared/storage/models';

export interface ActionModel extends RealmEntry {
  date: Date;
  amount: number;
  type: string;
  subtype: string;
  note?: string;
  registerDate: Date;
}

export type ActionStub = Overwrite<ActionModel, {
  id?: string;
}>;
