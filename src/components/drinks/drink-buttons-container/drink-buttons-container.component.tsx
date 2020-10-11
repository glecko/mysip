import React from 'react';
import { View } from 'react-native';
import PredefinedDrinkButton from '../predefined-drink-button/predefined-drink-button.component';
import { PREDEFINED_DRINKS } from '../../../data/drinks';
import styles from './drink-buttons-container.styles';

const DrinkButtonsContainer = () => {
  const buttons = PREDEFINED_DRINKS.map((drink) => {
    return (
      <PredefinedDrinkButton {...drink} />
    );
  });
  return (
    <View style={styles.container}>
      {buttons}
    </View>
  );
};

export default DrinkButtonsContainer;
