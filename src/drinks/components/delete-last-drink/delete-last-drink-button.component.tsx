import React from 'react';
import { View } from 'react-native';
import DeleteLastActionButton from '../../../actions/components/delete-last-action-button/delete-last-action-button.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../models/model';
import { FAB } from 'react-native-paper';
import styles from './delete-last-drink-button.styles';

const DeleteLastDrinkButton = () => {
  const renderButtonContentFn = () => (
    <FAB style={styles.fabButton} icon="undo" />
  );

  return (
    <View style={styles.container}>
      <DeleteLastActionButton
        type={ALCOHOL_UNIT_ACTION_TYPE}
        renderButtonContentFn={renderButtonContentFn}
      />
    </View>
  );
};

export default DeleteLastDrinkButton;
