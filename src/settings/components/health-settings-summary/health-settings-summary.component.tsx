import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Surface } from 'react-native-paper';
import { getUserGender, getUserWeight } from '../../hooks/health-settings/application';
import { displayUserGender } from '../../hooks/health-settings/display';
import styles from './health-settings-summary.styles';
import HealthSettingsDialogComponent from '../health-settings-dialog/health-settings-dialog.component';

const HealthSettingsSummaryComponent = () => {
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);

  const setStateFromStorage = async () => {
    setGender((await getUserGender()).toString());
    setWeight((await getUserWeight()).toString());
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
