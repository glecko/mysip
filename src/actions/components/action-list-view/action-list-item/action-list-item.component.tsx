import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import SwipeableItemRow from 'shared/components/swipeable-dialog-litem/swipeable-item-row.component';
import { ActionListItemModel } from './action-list-item.model';
import ActionEditDialog from '../../action-edit-dialog/action-edit-dialog.component';
import { displayAction } from '../../../hooks/display';
import { ActionStub } from '../../../models/models';
import { deleteAction } from '../../../hooks/application';
import { SwipeableDialogItemModelHandle } from '../../../../shared/components/swipeable-dialog-litem/swipeable-item-row.model';

const ActionListItem = (props: ActionListItemModel) => {
  const swipeableItem = useRef<SwipeableDialogItemModelHandle>(null);
  const [editDialogVisible, setEditDialogVisible] = useState(false);

  const onEditDialogClose = () => {
    setEditDialogVisible(false);
    if (swipeableItem.current) swipeableItem.current.recenter();
  };

  const alertText = `Are you sure you want to delete this action? (${displayAction(props.action, true)})`;
  const text = displayAction(props.action, true);
  return (
    <View>
      <SwipeableItemRow
        ref={swipeableItem}
        onDelete={() => deleteAction(props.action)}
        onEdit={() => setEditDialogVisible(true)}
        deleteAlertText={alertText}
      >
        <Text>{text}</Text>
      </SwipeableItemRow>
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
    </View>
  );
};

export default ActionListItem;
