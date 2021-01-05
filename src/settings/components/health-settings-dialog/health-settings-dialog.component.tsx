import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
  Button, Dialog, Portal, RadioButton, TextInput
} from 'react-native-paper';
import { GENDER_STORAGE_KEY, UserGender, WEIGHT_STORAGE_KEY } from '../../../drinks/models/model';
import { HealthSettingsDialogModel } from './health-settings-dialog.model';
import { saveHealthParameter } from '../../hooks/health-settings/application';
import styles from './health-settings-dialog.styles';

const HealthSettingsDialogComponent = (props: HealthSettingsDialogModel) => {
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    setWeight(props.initialWeight);
    setGender(props.initialGender);
  }, [props.visible]);

  const onDialogConfirm = () => {
    saveHealthParameter(WEIGHT_STORAGE_KEY, parseFloat(weight));
    saveHealthParameter(GENDER_STORAGE_KEY, parseInt(gender, 10));
    props.onDialogClose();
  };

  const isValidForm = parseFloat(weight) > 0;
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={() => props.onDialogClose()}>
        <Dialog.Title>Health parameters</Dialog.Title>
        <Dialog.Content style={styles.container}>
          <TextInput
            mode="outlined"
            placeholder="Weight (kg)s"
            label="Weight (kg)"
            keyboardType="numeric"
            onChangeText={(value) => setWeight(value)}
            value={weight}
          />
          <View style={styles.genderSelectorContainer}>
            <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
              <View>
                <Text>Male</Text>
                <RadioButton value={UserGender.MALE.toString()} />
              </View>
              <View>
                <Text>Female</Text>
                <RadioButton value={UserGender.FEMALE.toString()} />
              </View>
            </RadioButton.Group>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => props.onDialogClose()}>Cancel</Button>
          <Button disabled={!isValidForm} onPress={onDialogConfirm}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default HealthSettingsDialogComponent;
