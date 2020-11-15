import React from 'react';
import { View, ViewStyle } from 'react-native';
import PredefinedDrinkButton from '../predefined-drink-button/predefined-drink-button.component';
import {
  CUSTOM_DRINKS_BUTTON_PROPERTIES,
  PREDEFINED_DRINKS
} from '../../data/predefined-drinks';
import styles from './drink-buttons-container.styles';
import CustomActionButton from '../../../actions/components/action-register-button/custom-action/custom-action-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../models/model';
import buttonStyles from '../predefined-drink-button/predefined-drink-button.styles';

const DrinkButtonsContainer = () => {
  const buttons = PREDEFINED_DRINKS.map((drink) => (
    <PredefinedDrinkButton {...drink} />
  ));
  const customActionButtonStyle: ViewStyle = { ...buttonStyles.button, backgroundColor: CUSTOM_DRINKS_BUTTON_PROPERTIES.buttonColor };
  return (
    <View style={styles.container}>
      {buttons}
      <CustomActionButton
        type={ALCOHOL_UNIT_ACTION_TYPE}
        image={CUSTOM_DRINKS_BUTTON_PROPERTIES.image}
        text={CUSTOM_DRINKS_BUTTON_PROPERTIES.text}
        style={customActionButtonStyle}
      />
    </View>
  );
};

export default DrinkButtonsContainer;
