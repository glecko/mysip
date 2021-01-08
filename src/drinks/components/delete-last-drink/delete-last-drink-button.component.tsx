import React from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import DeleteLastActionButton from '../../../actions/components/delete-last-action-button/delete-last-action-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../models/constants';
import styles from './delete-last-drink-button.styles';

const DeleteLastDrinkButton = () => {
  return (
    <View style={styles.container}>
      <DeleteLastActionButton type={ALCOHOL_UNIT_ACTION_TYPE}>
        <FAB style={styles.fabButton} icon="undo" />
      </DeleteLastActionButton>
    </View>
  );
};

export default DeleteLastDrinkButton;
