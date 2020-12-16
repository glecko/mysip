import React, { useState } from 'react';
import {
  Button, Dialog, Portal, TextInput
} from 'react-native-paper';
import { DrinkButtonDialogModel } from './drink-button-dialog.model';
import { upsertAlcoholicDrink } from '../../../../drinks/hooks/application';
import styles from './drink-button-dialog.styles';

const DrinkButtonDialog = (props: DrinkButtonDialogModel) => {
  const [name, setName] = useState(props.drink.name);
  const [volume, setVolume] = useState(props.drink.volume.toFixed(0));
  const [content, setContent] = useState((props.drink.content * 100).toFixed(2));

  const resetDialog = () => {};

  const isValidForm = name !== '' && parseFloat(volume) > 0 && parseFloat(content) > 0;

  const onDialogConfirm = () => {
    upsertAlcoholicDrink({
      id: props.drink.id,
      name,
      volume: parseFloat(volume),
      content: parseFloat(content) / 100,
      sortingIndex: props.drink.sortingIndex,
      imageName: props.drink.imageName,
      buttonColor: props.drink.buttonColor,
    });
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
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.textInput}
          />
          <TextInput
            mode="outlined"
            label="Volume (ml)"
            placeholder="Volume (ml)"
            keyboardType="numeric"
            onChangeText={(text) => setVolume(text)}
            value={volume}
            style={styles.textInput}
          />
          <TextInput
            mode="outlined"
            label="Content (%)"
            placeholder="Content (%)"
            keyboardType="numeric"
            onChangeText={(text) => setContent(text)}
            value={content}
            style={styles.textInput}
          />
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
