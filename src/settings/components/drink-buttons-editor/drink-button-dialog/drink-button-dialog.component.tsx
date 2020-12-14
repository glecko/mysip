import React from 'react';
import {
  Button, Dialog, Portal, Text
} from 'react-native-paper';
import { DrinkButtonDialogModel } from './drink-button-dialog.model';

const DrinkButtonDialog = (props: DrinkButtonDialogModel) => {
  const resetDialog = () => {};

  const isValidForm = true;

  const onDialogConfirm = () => {
    resetDialog();
    props.onDialogConfirm();
  };

  const onDismiss = () => {
    resetDialog();
    props.onDismiss();
  };

  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={onDismiss}>
        <Dialog.Title>Drink button</Dialog.Title>
        <Dialog.Content>
          <Text>The game</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancel</Button>
          <Button disabled={!isValidForm} onPress={onDialogConfirm}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DrinkButtonDialog;
