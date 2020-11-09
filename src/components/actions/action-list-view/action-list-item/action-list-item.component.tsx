import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './action-list-item.styles';
import { RealmService } from '../../../../storage/realm';
import { ActionListItemModel } from './action-list-item.model';
import { ActionModel, ActionSchema, displayAction } from '../../../../storage/actions/schema';
import AlertConfirmButton from '../../../shared/alert-confirm-button/alert-confirm-button.component';
import ActionEditDialog from './action-edit-dialog/action-edit-dialog.component';
import { ActionStub } from './action-edit-dialog/action-edit-dialog.model';

const ActionListItem = (props: ActionListItemModel) => {
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const onEditDialogClose = () => setEditDialogVisible(false);

  const deleteAction = (action: ActionModel) => {
    RealmService.deleteObjectById(ActionSchema.name, action.id);
  };

  const actionRightButtons = (action: ActionModel) => {
    const deleteCurrentAction = () => deleteAction(action);
    const alertText = `Are you sure you want to delete this action? (${displayAction(action, true)})`;
    const renderButtonContentFn = () => (
      <View style={[styles.actionButton, { backgroundColor: 'red' }]}>
        <Icon size={30} name="delete" color="white" />
      </View>
    );
    return [
      <TouchableHighlight onPress={() => setEditDialogVisible(true)} style={[styles.actionButton, { backgroundColor: 'lightseagreen' }]}>
        <Icon size={30} name="edit" color="white" />
      </TouchableHighlight>,
      <AlertConfirmButton
        onConfirm={deleteCurrentAction}
        alertText={alertText}
        alertTitle="Delete action?"
        renderContentFn={renderButtonContentFn}
      />,
      <ActionEditDialog
        action={action as ActionStub}
        visible={editDialogVisible}
        onDialogConfirm={onEditDialogClose}
        onDismiss={onEditDialogClose}
      />
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
