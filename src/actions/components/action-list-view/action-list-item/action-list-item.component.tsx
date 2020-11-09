import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './action-list-item.styles';
import { ActionListItemModel } from './action-list-item.model';
import { ActionModel } from '../../../models/schema';
import AlertConfirmButton from '../../../../shared/components/alert-confirm-button/alert-confirm-button.component';
import ActionEditDialog from '../../action-edit-dialog/action-edit-dialog.component';
import { displayAction } from '../../../hooks/display';
import { ActionStub } from '../../../models/models';
import { deleteAction } from '../../../hooks/application';

const ActionListItem = (props: ActionListItemModel) => {
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const onEditDialogClose = () => setEditDialogVisible(false);

  const actionRightButtons = (action: ActionModel) => {
    const deleteCurrentAction = () => deleteAction(action);
    const alertText = `Are you sure you want to delete this action? (${displayAction(action, true)})`;
    const renderButtonContentFn = () => (
      <View style={[styles.actionButton, { backgroundColor: 'red' }]}>
        <Icon size={30} name="delete" color="white" />
      </View>
    );
    return [
      <View>
        <TouchableHighlight onPress={() => setEditDialogVisible(true)} style={[styles.actionButton, { backgroundColor: 'lightseagreen' }]}>
          <Icon size={30} name="edit" color="white" />
        </TouchableHighlight>
        <ActionEditDialog
          action={action as ActionStub}
          visible={editDialogVisible}
          onDialogConfirm={onEditDialogClose}
          onDismiss={onEditDialogClose}
          title="Edit drink entry"
        />
      </View>,
      <AlertConfirmButton
        onConfirm={deleteCurrentAction}
        alertText={alertText}
        alertTitle="Delete action?"
        renderContentFn={renderButtonContentFn}
      />,
    ];
  };

  const text = displayAction(props.action, true);
  return (
    <Swipeable rightButtons={actionRightButtons(props.action)}>
      <View style={styles.swipeRowFront}>
        <Text>{text}</Text>
      </View>
    </Swipeable>
  );
};

export default ActionListItem;
