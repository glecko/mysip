import React from 'react';
import { View } from 'react-native';
import PredefinedDrinkButton from '../predefined-drink-button/predefined-drink-button.component';
import { PREDEFINED_DRINKS } from '../../data/predefined-drinks';
import styles from './drink-buttons-container.styles';
import CustomActionButton from '../../../actions/components/action-register-button/custom-action/custom-action-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../models/model';

const DrinkButtonsContainer = () => {
  const buttons = PREDEFINED_DRINKS.map((drink) => (
    <PredefinedDrinkButton {...drink} />
  ));
  return (
    <View style={styles.container}>
      {buttons}
      <CustomActionButton
        type={ALCOHOL_UNIT_ACTION_TYPE}
        imageUrl="https://www.iconfinder.com/data/icons/american-food/48/v-51-512.png"
        text="Add custom drink"
      />
    </View>
  );
};

export default DrinkButtonsContainer;
