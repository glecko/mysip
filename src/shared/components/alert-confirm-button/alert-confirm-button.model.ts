export interface AlertConfirmButtonModel {
  onConfirm?: Function;
  onCancel?: Function;
  buttonText?: string;
  renderContentFn?: () => JSX.Element;
  alertText?: string;
  alertTextFn?: Function;
  alertTitle: string;
}
