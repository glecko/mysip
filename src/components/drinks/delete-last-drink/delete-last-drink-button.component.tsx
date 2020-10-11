import React from 'react';
import { View } from 'react-native';
import DeleteLastActionButton from '../../actions/delete-last-action-button/delete-last-action-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../../hooks/drinks/model';
import { DeleteLastDrinkButtonStyles } from './delete-last-drink-button.styles';
import { FAB } from 'react-native-paper';

const DeleteLastDrinkButton = () => {
  const renderButtonContentFn = () => (
    <FAB style={DeleteLastDrinkButtonStyles.fabButton} icon="undo" />
  );

  return (
    <View style={DeleteLastDrinkButtonStyles.container}>
      <DeleteLastActionButton
        type={ALCOHOL_UNIT_ACTION_TYPE}
        renderButtonContentFn={renderButtonContentFn}
      />
    </View>
  );
};

export default DeleteLastDrinkButton;
