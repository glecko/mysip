import { Overwrite } from '../../shared/utils/types';
import { ActionModel } from './schema';

export type ActionStub = Overwrite<ActionModel, {
  id?: string;
  date?: Date;
}>;
