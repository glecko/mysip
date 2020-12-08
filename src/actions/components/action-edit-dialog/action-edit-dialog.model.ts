import { ActionStub } from '../../models/models';

export interface ActionEditDialogModel extends DialogCustomisationModel {
  action: ActionStub;
  visible: boolean;
  onDismiss: Function;
  onDialogConfirm: Function;
  title?: string;
}

export interface DialogCustomisationModel {
  subtypePlaceholder?: string;
  amountPlaceholder?: string;
  notePlaceholder?: string;
}
