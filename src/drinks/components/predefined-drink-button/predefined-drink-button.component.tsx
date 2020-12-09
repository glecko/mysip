import React from 'react';
import { ViewStyle } from 'react-native';
import ActionRegisterButton from '../../../actions/components/action-register-button/action-register-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../models/model';
import {
  getDrinkDisplayContent,
  getDrinkDisplayName, getDrinkDisplayVolume
} from '../../hooks/display';
import buttonStyles from './predefined-drink-button.styles';
import { getAlcoholUnitsForDrink } from '../../hooks/format';
import { AlcoholicDrinkModel } from '../../../settings/models/model';
import { getDrinkImage } from '../../../settings/hooks/alcoholic-drinks/images';

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
      image={getDrinkImage(props.imageName)}
      text={text}
      bottomRightText={bottomRightText}
      bottomLeftText={bottomLeftText}
      style={buttonStyle}
    />
  );
};

export default PredefinedDrinkButton;
