import { ActionStub } from '../../models/models';

export interface ActionEditDialogModel {
  action: ActionStub;
  visible: boolean;
  onDismiss: Function;
  onDialogConfirm: Function;
  title?: string;
}
