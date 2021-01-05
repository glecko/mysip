import React, { useState } from 'react';
import {
  View, Text, TouchableHighlight, TouchableOpacity, Pressable
} from 'react-native';
// @ts-ignore
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './action-list-item.styles';
import { ActionListItemModel } from './action-list-item.model';
import AlertConfirmButton from '../../../../shared/components/alert-confirm-button/alert-confirm-button.component';
import ActionEditDialog from '../../action-edit-dialog/action-edit-dialog.component';
import { displayAction } from '../../../hooks/display';
import { ActionStub } from '../../../models/models';
import { deleteAction } from '../../../hooks/application';

const ActionListItem = (props: ActionListItemModel) => {
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [swipeableRef, setSwipeableRef] = useState<any>();
  const onEditDialogClose = () => {
    setEditDialogVisible(false);
    if (swipeableRef) swipeableRef.recenter();
  };

  const onItemPress = () => {
    if (swipeableRef) swipeableRef.bounceRight();
  };

  const deleteCurrentAction = () => deleteAction(props.action);
  const alertText = `Are you sure you want to delete this action? (${displayAction(props.action, true)})`;

  const actionRightButtons = () => {
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
    <Swipeable onRef={(ref: any) => setSwipeableRef(ref)} rightButtons={actionRightButtons()}>
      <Pressable onPress={onItemPress} style={styles.swipeRowFront}>
        <Text>{text}</Text>
      </Pressable>
      <ActionEditDialog
        action={props.action as ActionStub}
        visible={editDialogVisible}
        onDialogConfirm={onEditDialogClose}
        onDismiss={onEditDialogClose}
        title="Edit drink entry"
        subtypePlaceholder={props.dialog?.subtypePlaceholder}
        amountPlaceholder={props.dialog?.amountPlaceholder}
        notePlaceholder={props.dialog?.notePlaceholder}
      />
    </Swipeable>
  );
};

export default ActionListItem;
