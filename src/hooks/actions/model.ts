import { ActionModel } from '../../storage/actions/schema';

export interface ActionsAgregatedByDateModel {
  formattedDate: string;
  actions: ActionModel[];
}

export interface IntervalModel {
  start?: Date;
  end?: Date;
}
