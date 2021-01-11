import React, { useEffect, useState } from 'react';
import {
  Button, Dialog, Portal, TextInput
} from 'react-native-paper';
import { ActionEditDialogModel } from './action-edit-dialog.model';
import { upsertAction } from '../../hooks/application';
import DatetimePickerComponent from '../../../shared/components/datetime-picker/datetime-picker.component';
import styles from './action-edit-dialog.styles';

const ActionEditDialog = (props: ActionEditDialogModel) => {
  const [date, setDate] = useState(props.action.date);
  const [note, setNote] = useState(props.action.note ? props.action.note : '');
  const [amount, setAmount] = useState(props.action.amount.toFixed(1));
  const [subtype, setSubtype] = useState(props.action.subtype);

  const isValidForm = subtype !== '' && parseFloat(amount) > 0 && date <= new Date();
  const title = props.title ? props.title : `Edit ${props.action.type}`;

  const resetDialog = () => {
    setAmount(props.action.amount.toFixed(1));
    setSubtype(props.action.subtype);
    setNote(props.action.note ? props.action.note : '');
    setDate(props.action.date);
  };

  useEffect(() => {
    resetDialog();
  }, [props.visible]);

  const onDialogConfirm = () => {
    upsertAction({
      id: props.action.id,
      type: props.action.type,
      date,
      amount: parseFloat(amount),
      subtype,
      note,
      registerDate: props.action.registerDate
    });
    props.onDialogConfirm();
  };

  const onDismiss = () => {
    props.onDismiss();
  };

  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <DatetimePickerComponent
            date={date}
            setDate={setDate}
          />
          <TextInput
            mode="outlined"
            label={props.subtypePlaceholder ? props.subtypePlaceholder : 'Subtype'}
            placeholder={props.subtypePlaceholder ? props.subtypePlaceholder : 'Subtype'}
            defaultValue={subtype}
            onChangeText={(text) => setSubtype(text)}
            style={styles.textInput}
          />
          <TextInput
            mode="outlined"
            label={props.amountPlaceholder ? props.amountPlaceholder : 'Amount'}
            placeholder={props.amountPlaceholder ? props.amountPlaceholder : 'Amount'}
            keyboardType="numeric"
            onChangeText={(text) => setAmount(text)}
            defaultValue={amount}
            style={styles.textInput}
          />
          <TextInput
            mode="outlined"
            label={props.notePlaceholder ? props.notePlaceholder : 'Note'}
            placeholder={props.notePlaceholder ? props.notePlaceholder : 'Note'}
            defaultValue={note}
            onChangeText={(text) => setNote(text)}
            style={styles.textInput}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancel</Button>
          <Button disabled={!isValidForm} onPress={onDialogConfirm}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ActionEditDialog;
