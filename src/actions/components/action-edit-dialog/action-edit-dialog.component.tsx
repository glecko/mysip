import React, { useState } from 'react';
import {
  Button, Dialog, Portal, TextInput
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ActionEditDialogModel } from './action-edit-dialog.model';
import { upsertAction } from '../../hooks/application';

const ActionEditDialog = (props: ActionEditDialogModel) => {
  const [date, setDate] = useState(props.action.date);
  const [note, setNote] = useState(props.action.note ? props.action.note : '');
  const [amount, setAmount] = useState(props.action.amount.toFixed(2));
  const [subtype, setSubtype] = useState(props.action.subtype);

  const isValidForm = subtype !== '' && parseFloat(amount) > 0;
  const title = props.title ? props.title : `Edit ${props.action.type}`;

  const resetDialog = () => {
    setAmount(props.action.amount.toFixed(2));
    setSubtype(props.action.subtype);
    setNote(props.action.note ? props.action.note : '');
    setDate(props.action.date);
  };

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
    resetDialog();
    props.onDialogConfirm();
  };

  const onDismiss = () => {
    resetDialog();
    props.onDismiss();
  };

  const onDateSelectionChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            minuteInterval={15}
            mode="datetime"
            display="default"
            onChange={onDateSelectionChange}
          />
          <TextInput
            mode="outlined"
            placeholder="Subtype"
            value={subtype}
            onChangeText={(text) => setSubtype(text)}
          />
          <TextInput
            mode="outlined"
            placeholder="Amount"
            keyboardType="numeric"
            onChangeText={(text) => setAmount(text)}
            value={amount.toString()}
          />
          <TextInput
            mode="outlined"
            placeholder="Note"
            value={note}
            onChangeText={(text) => setNote(text)}
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
