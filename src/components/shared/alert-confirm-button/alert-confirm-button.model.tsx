export interface AlertConfirmButtonModel {
  onConfirm?: Function;
  onCancel?: Function;
  buttonText: string;
  alertText?: string;
  alertTextFn?: Function;
  alertTitle: string;
}
