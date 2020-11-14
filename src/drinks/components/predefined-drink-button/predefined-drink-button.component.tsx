import React from 'react';
import ActionRegisterButton from '../../../actions/components/action-register-button/action-register-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE, AlcoholicDrinkModel } from '../../models/model';
import {
  getAlcoholUnitsForDrink,
  getDrinkDisplayContent,
  getDrinkDisplayName, getDrinkDisplayVolume
} from '../../hooks/display';
import buttonStyles from './predefined-drink-button.styles';
import { ViewStyle } from 'react-native';

const PredefinedDrinkButton = (props: AlcoholicDrinkModel) => {
  const amount = getAlcoholUnitsForDrink(props);
  const text = getDrinkDisplayName(props);
  const bottomRightText = getDrinkDisplayContent(props);
  const bottomLeftText = getDrinkDisplayVolume(props);
  const buttonStyle: ViewStyle = { ...buttonStyles.button, backgroundColor: props.buttonColor };
  return (
    <ActionRegisterButton
      type={ALCOHOL_UNIT_ACTION_TYPE}
      subtype={props.name}
      amount={amount}
      image={props.image}
      text={text}
      bottomRightText={bottomRightText}
      bottomLeftText={bottomLeftText}
      style={buttonStyle}
    />
  );
};

export default PredefinedDrinkButton;
