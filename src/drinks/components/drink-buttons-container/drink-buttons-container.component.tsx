import React from 'react';
import { View, ViewStyle } from 'react-native';
import PredefinedDrinkButton from '../predefined-drink-button/predefined-drink-button.component';
import {
  CUSTOM_DRINKS_BUTTON_PROPERTIES, DRINK_EDIT_DIALOG_AMOUNT_PLACEHOLDER, DRINK_EDIT_DIALOG_SUBTYPE_PLACEHOLDER,
  PREDEFINED_DRINKS
} from '../../data/predefined-drinks';
import styles from './drink-buttons-container.styles';
import CustomActionButton from '../../../actions/components/action-register-button/custom-action/custom-action-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../models/model';
import buttonStyles from '../predefined-drink-button/predefined-drink-button.styles';

const DrinkButtonsContainer = () => {
  const buttons = PREDEFINED_DRINKS.map((drink) => (
    <PredefinedDrinkButton key={drink.name} {...drink} />
  ));
  const customActionButtonStyle: ViewStyle = { ...buttonStyles.button, backgroundColor: CUSTOM_DRINKS_BUTTON_PROPERTIES.buttonColor };
  return (
    <View style={styles.container}>
      {buttons}
      <CustomActionButton
        type={ALCOHOL_UNIT_ACTION_TYPE}
        image={CUSTOM_DRINKS_BUTTON_PROPERTIES.image}
        text={CUSTOM_DRINKS_BUTTON_PROPERTIES.text}
        dialogTitle={CUSTOM_DRINKS_BUTTON_PROPERTIES.dialogTitle}
        style={customActionButtonStyle}
        dialogOptions={{
          amountPlaceholder: DRINK_EDIT_DIALOG_AMOUNT_PLACEHOLDER,
          subtypePlaceholder: DRINK_EDIT_DIALOG_SUBTYPE_PLACEHOLDER
        }}
      />
    </View>
  );
};

export default DrinkButtonsContainer;
