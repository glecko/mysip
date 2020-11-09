import { TextStyle } from 'react-native';
import { IntervalModel } from '../../hooks/aggregation/model';

export interface IntervalMonitorModel {
  type: string;
  interval: IntervalModel;
  style: TextStyle;
}
