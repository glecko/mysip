/* eslint-disable global-require */
import { IMAGE_NAME_MAPPING } from './images';

export const DEFAULT_NEW_DRINK_IMAGE_NAME = 'default';
export const DEFAULT_NEW_DRINK_BUTTON_COLOR = '#cceeff';

export const CUSTOM_DRINKS_BUTTON_PROPERTIES = {
  image: IMAGE_NAME_MAPPING.default,
  buttonColor: '#cceeff',
  text: 'Another drink type',
  dialogTitle: 'Add custom drink type'
};

/* eslint-enable global-require */

export const DRINK_EDIT_DIALOG_SUBTYPE_PLACEHOLDER = 'Drink name';
export const DRINK_EDIT_DIALOG_AMOUNT_PLACEHOLDER = 'Amount (in alcohol units)';
