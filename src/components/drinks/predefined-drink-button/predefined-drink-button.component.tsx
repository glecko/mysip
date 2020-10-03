import React from 'react';
import ActionRegisterButton from '../../actions/action-register-button/action-register-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE, AlcoholicDrinkModel } from '../../../hooks/drinks/model';
import { getAlcoholUnitsForDrink, getDrinkDescription } from '../../../hooks/drinks/hooks';

const PredefinedDrinkButton = (props: AlcoholicDrinkModel) => {
  const amount = getAlcoholUnitsForDrink(props);
  const text = getDrinkDescription(props);
  return (
    <ActionRegisterButton
      type={ALCOHOL_UNIT_ACTION_TYPE}
      subtype={props.name}
      amount={amount}
      imageUrl={props.imageUrl}
      text={text}
    />
  );
};

export default PredefinedDrinkButton;
