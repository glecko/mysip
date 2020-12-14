import { AlcoholicDrinkModel } from '../../../models/model';

export interface DrinkButtonDialogModel {
  drink?: AlcoholicDrinkModel;
  visible: boolean;
  onDismiss: Function;
  onDialogConfirm: Function;
}
