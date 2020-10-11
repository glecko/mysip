import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { CustomActionRegisterButtonModel } from '../action-register-button.model';
import { ActionSchema, createActionModel } from '../../../../storage/actions/schema';
import { ActionRegisterButtonStyles, ActionRegisterImageButtonStyles } from '../action-register-button.styles';
import ImageButton from '../../../shared/image-button/image-button.component';
import { RealmService } from '../../../../storage/realm';

const CustomActionButton = (props: CustomActionRegisterButtonModel) => {
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [subtype, setSubtype] = useState('');
  const [note, setNote] = useState('');

  const resetDialog = () => {
    setAmount('');
    setSubtype('');
    setNote('');
    setVisible(false);
  };

  const onDialogConfirm = () => {
    const action = createActionModel(
      props.type,
      parseInt(amount, 10),
      subtype,
      note
    );
    RealmService.write(ActionSchema.name, action);
    resetDialog();
  };

  const mainText = props.text ? props.text : `Add custom ${props.type}`;
  const isValidForm = subtype !== '' && amount > 0;

  const textElement = (
    <View style={ActionRegisterButtonStyles.textContainer}>
      <Text style={ActionRegisterButtonStyles.mainText}>{mainText}</Text>
    </View>
  );

  const styles = {
    image: ActionRegisterImageButtonStyles.image,
    button: ActionRegisterImageButtonStyles.button,
    container: ActionRegisterImageButtonStyles.container,
  };
  return (
    <View>
      <View style={ActionRegisterButtonStyles.container}>
        <ImageButton onPress={() => setVisible(true)} imageUrl={props.imageUrl} styles={styles} textElement={textElement} />
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Register custom action</Dialog.Title>
          <Dialog.Content>
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
            <Button onPress={resetDialog}>Cancel</Button>
            <Button disabled={!isValidForm} onPress={onDialogConfirm}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default CustomActionButton;
