import { ActionModel } from '../../models/models';
import { TimeUnitAggregationsModel } from '../../../shared/models/date';

export interface ActionsAgregatedByTimeUnitModel extends TimeUnitAggregationsModel {
  actions: ActionModel[];
}

export interface IntervalModel {
  start?: Date;
  end?: Date;
}
