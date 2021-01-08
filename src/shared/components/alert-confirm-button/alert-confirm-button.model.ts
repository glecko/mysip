export interface AlertConfirmButtonModel {
  onConfirm?: Function;
  onCancel?: Function;
  children: JSX.Element;
  alertText?: string;
  alertTextFn?: Function;
  alertTitle: string;
}
