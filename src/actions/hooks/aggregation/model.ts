import { ActionModel } from '../../models/schema';

export interface ActionsAgregatedByDateModel {
  formattedDate: string;
  actions: ActionModel[];
}

export interface IntervalModel {
  start?: Date;
  end?: Date;
}
