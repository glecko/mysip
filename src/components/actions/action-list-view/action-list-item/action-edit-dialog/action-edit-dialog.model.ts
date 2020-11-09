import { ActionModel } from '../../../../../storage/actions/schema';

export interface ActionEditDialogModel {
  action: ActionStub;
  visible: boolean;
  onDismiss: Function;
  onDialogConfirm: Function;
  title?: string;
}

type Overwrite<T1, T2> = {
  [P in Exclude<keyof T1, keyof T2>]: T1[P]
} & T2;

export type ActionStub = Overwrite<ActionModel, {
  id?: string;
}>;
