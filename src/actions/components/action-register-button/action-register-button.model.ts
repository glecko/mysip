import { ViewStyle } from 'react-native';

export interface ActionRegisterButtonModel {
  type: string;
  imageUrl?: string;
  text?: string;
  style?: ViewStyle;
}

export interface FullActionRegisterButtonModel extends ActionRegisterButtonModel {
  subtype: string;
  amount: number;
  bottomRightText?: string;
  bottomLeftText?: string;
}
