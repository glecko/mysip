import { TextStyle } from 'react-native';

export interface IntervalMonitorModel {
  type: string;
  interval: { start?: Date, end?: Date }
  style: TextStyle;
}
