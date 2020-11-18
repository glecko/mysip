import { ActionModel } from '../../models/models';

export interface ActionsAgregatedByDateModel {
  formattedDate: string;
  actions: ActionModel[];
}

export interface IntervalModel {
  start?: Date;
  end?: Date;
}
