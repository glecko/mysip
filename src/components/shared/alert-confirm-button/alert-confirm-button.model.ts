export interface AlertConfirmButtonModel {
  onConfirm?: Function;
  onCancel?: Function;
  buttonText?: string;
  renderContentFn?: Function;
  alertText?: string;
  alertTextFn?: Function;
  alertTitle: string;
}
