import { ActionModel } from '../../../models/models';
import { DialogCustomisationModel } from '../../action-edit-dialog/action-edit-dialog.model';

export interface ActionListItemModel {
  action: ActionModel;
  dialog?: DialogCustomisationModel;
}
