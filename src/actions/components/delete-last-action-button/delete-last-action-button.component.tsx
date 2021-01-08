import React from 'react';
import { Text, View } from 'react-native';
import { DeleteLastActionButtonModel } from './delete-last-action-button.model';
import AlertConfirmButton from '../../../shared/components/alert-confirm-button/alert-confirm-button.component';
import { deleteLastAction, getLastAction } from '../../hooks/application';
import { displayAction } from '../../hooks/display';

function getAlertText(): string {
  const entryToDelete = getLastAction();
  if (!entryToDelete) return 'No actions to delete.';
  return `Are you sure you want to delete the last ${entryToDelete.type} entry? 
  
  ${displayAction(entryToDelete, true)}`;
}

const DeleteLastActionButton = (props: DeleteLastActionButtonModel) => {
  const alertTitle = 'Delete last entry?';
  return (
    <View>
      <AlertConfirmButton
        onConfirm={() => deleteLastAction(props.type)}
        alertTextFn={getAlertText}
        alertTitle={alertTitle}
        onCancel={() => {}}
      >
        {props.children}
      </AlertConfirmButton>
    </View>
  );
};

export default DeleteLastActionButton;
