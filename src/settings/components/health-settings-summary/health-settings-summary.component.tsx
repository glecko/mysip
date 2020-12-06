import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Surface } from 'react-native-paper';
import { readHealthParameter } from '../../hooks/application';
import {
  DEFAULT_USER_GENDER,
  DEFAULT_USER_WEIGHT,
  GENDER_STORAGE_KEY,
  UserGender,
  WEIGHT_STORAGE_KEY
} from '../../models/model';
import { displayUserGender } from '../../hooks/display';
import styles from './health-settings-summary.styles';
import HealthSettingsDialogComponent from '../health-settings-dialog/health-settings-dialog.component';

async function readInitialParam(key: string, defaultValue: number, setValueFn: Function) {
  const value = await readHealthParameter(key, defaultValue);
  setValueFn(value.toString());
}

const HealthSettingsSummaryComponent = () => {
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState(UserGender.MALE.toString());
  const [dialogVisible, setDialogVisible] = useState(false);

  const setStateFromStorage = () => {
    readInitialParam(WEIGHT_STORAGE_KEY, DEFAULT_USER_WEIGHT, setWeight);
    readInitialParam(GENDER_STORAGE_KEY, DEFAULT_USER_GENDER, setGender);
  };

  useEffect(() => {
    setStateFromStorage();
  }, []);

  const onDialogClose = () => {
    setStateFromStorage();
    setDialogVisible(false);
  };

  const weightText = `Weight: ${weight}kg`;
  return (
    <View>
      <Text style={styles.header}>Health parameters</Text>
      <Surface style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{weightText}</Text>
          <Text style={styles.text}>{displayUserGender(parseFloat(gender))}</Text>
        </View>
        <TouchableHighlight onPress={() => setDialogVisible(true)}>
          <Icon size={30} name="edit" />
        </TouchableHighlight>
      </Surface>
      <HealthSettingsDialogComponent
        visible={dialogVisible}
        initialGender={gender}
        initialWeight={weight}
        onDialogClose={onDialogClose}
      />
    </View>
  );
};

export default HealthSettingsSummaryComponent;
