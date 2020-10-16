import { IntervalModel } from '../../../hooks/actions/model';

export interface ActionTimelineChartModel {
  type: string;
  interval: IntervalModel;
  aggregationFormat: string;
}
