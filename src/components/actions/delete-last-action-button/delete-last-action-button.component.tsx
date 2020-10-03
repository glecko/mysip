import React from 'react';
import { View } from 'react-native';
import { DeleteLastActionButtonModel } from './delete-last-action-button.model';
import { RealmService } from '../../../storage/realm';
import AlertConfirmButton from '../../shared/alert-confirm-button/alert-confirm-button.component';
import {
  ActionModel,
  ActionSchema,
  displayAction,
} from '../../../storage/actions/schema';

function getAlertText(): string {
  const entryToDelete = RealmService.getLastModelEntry<ActionModel>(
    ActionSchema.name,
    'date'
  );
  if (!entryToDelete) return 'No actions to delete.';
  return `Are you sure you want to delete the last ${entryToDelete.type}? 
  
  ${displayAction(entryToDelete, true)}`;
}

const DeleteLastActionButton = (props: DeleteLastActionButtonModel) => {
  const deleteLastAction = () => {
    RealmService.deleteLastModelEntry(ActionSchema.name, 'date');
  };

  const buttonPressCancel = () => {};

  const buttonText = `Delete last ${props.type}`;
  const alertTitle = `Delete last ${props.type}?`;
  return (
    <View>
      <AlertConfirmButton
        onConfirm={deleteLastAction}
        alertTextFn={getAlertText}
        alertTitle={alertTitle}
        buttonText={buttonText}
        onCancel={buttonPressCancel}
      />
    </View>
  );
};

export default DeleteLastActionButton;
