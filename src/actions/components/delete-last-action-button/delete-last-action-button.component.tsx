import React from 'react';
import { View } from 'react-native';
import { DeleteLastActionButtonModel } from './delete-last-action-button.model';
import AlertConfirmButton from '../../../shared/components/alert-confirm-button/alert-confirm-button.component';
import {
  displayAction,
} from '../../models/schema';
import { deleteLastAction, getLastAction } from '../../hooks/application';

function getAlertText(): string {
  const entryToDelete = getLastAction();
  if (!entryToDelete) return 'No actions to delete.';
  return `Are you sure you want to delete the last ${entryToDelete.type} entry? 
  
  ${displayAction(entryToDelete, true)}`;
}

const DeleteLastActionButton = (props: DeleteLastActionButtonModel) => {
  const buttonPressCancel = () => {};

  const buttonText = `Delete last ${props.type} entry`;
  const alertTitle = 'Delete last entry?';
  return (
    <View>
      <AlertConfirmButton
        onConfirm={() => deleteLastAction(props.type)}
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
