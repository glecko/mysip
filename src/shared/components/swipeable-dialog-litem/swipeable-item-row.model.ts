import { MutableRefObject } from 'react';

export interface SwipeableDialogItemModel {
  onEdit?: () => void;
  onDelete?: () => void;
  onSwipe?: () => void;
  deleteAlertText: string;
  children?: JSX.Element;
  ref: MutableRefObject<SwipeableDialogItemModelHandle>;
}
export type SwipeableDialogItemModelHandle = {
  recenter: () => void;
};
