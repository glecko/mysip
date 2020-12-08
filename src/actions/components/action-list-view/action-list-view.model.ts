import { DialogCustomisationModel } from '../action-edit-dialog/action-edit-dialog.model';

export interface ActionListViewModel {
  name: string;
  maxEntries?: number;
  dialog?: DialogCustomisationModel;
}
