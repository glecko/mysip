import { ImageSourcePropType, ViewStyle } from 'react-native';
import { DialogCustomisationModel } from '../action-edit-dialog/action-edit-dialog.model';

export interface ActionRegisterButtonBaseModel {
  type: string;
  image?: ImageSourcePropType;
  text?: string;
  style?: ViewStyle;
}

export interface ActionRegisterButtonModel extends ActionRegisterButtonBaseModel {
  subtype: string;
  amount: number;
  bottomRightText?: string;
  bottomLeftText?: string;
}

export interface CustomActionRegisterButtonModel extends ActionRegisterButtonBaseModel {
  dialogTitle: string;
  dialogOptions?: DialogCustomisationModel;
}
