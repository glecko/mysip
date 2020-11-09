export interface ActionRegisterButtonModel {
  type: string;
  imageUrl?: string;
  text?: string;
}

export interface FullActionRegisterButtonModel extends ActionRegisterButtonModel {
  subtype: string;
  amount: number;
  bottomRightText?: string;
  bottomLeftText?: string;
}
