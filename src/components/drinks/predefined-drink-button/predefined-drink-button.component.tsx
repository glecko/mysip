import React from 'react';
import ActionRegisterButton from '../../actions/action-register-button/action-register-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE, AlcoholicDrinkModel } from '../../../hooks/drinks/model';
import {
  getAlcoholUnitsForDrink,
  getDrinkDisplayContent,
  getDrinkDisplayName, getDrinkDisplayVolume
} from '../../../hooks/drinks/hooks';

const PredefinedDrinkButton = (props: AlcoholicDrinkModel) => {
  const amount = getAlcoholUnitsForDrink(props);
  const text = getDrinkDisplayName(props);
  const bottomRightText = getDrinkDisplayContent(props);
  const bottomLeftText = getDrinkDisplayVolume(props);
  return (
    <ActionRegisterButton
      type={ALCOHOL_UNIT_ACTION_TYPE}
      subtype={props.name}
      amount={amount}
      imageUrl={props.imageUrl}
      text={text}
      bottomRightText={bottomRightText}
      bottomLeftText={bottomLeftText}
    />
  );
};

export default PredefinedDrinkButton;
