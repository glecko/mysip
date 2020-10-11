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
  return `Are you sure you want to delete the last ${entryToDelete.type} entry? 
  
  ${displayAction(entryToDelete, true)}`;
}

const DeleteLastActionButton = (props: DeleteLastActionButtonModel) => {
  const deleteLastAction = () => {
    RealmService.deleteObjectsByQuery(ActionSchema.name, `type = "${props.type}" SORT(date DESC) LIMIT(1)`);
  };

  const buttonPressCancel = () => {};

  const buttonText = `Delete last ${props.type} entry`;
  const alertTitle = 'Delete last entry?';
  return (
    <View>
      <AlertConfirmButton
        onConfirm={deleteLastAction}
        alertTextFn={getAlertText}
        alertTitle={alertTitle}
        buttonText={buttonText}
        renderContentFn={props.renderButtonContentFn}
        onCancel={buttonPressCancel}
      />
    </View>
  );
};

export default DeleteLastActionButton;
