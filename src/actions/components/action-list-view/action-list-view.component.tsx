import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, FlatList, ListRenderItemInfo
} from 'react-native';
import { ActionListViewModel } from './action-list-view.model';
import ActionListItem from './action-list-item/action-list-item.component';
import { getActions, listenToActionCollection } from '../../hooks/application';
import { ActionModel } from '../../models/models';

const ActionListView = (props: ActionListViewModel) => {
  const [actionsData, setActionsData] = useState(getActions(props.name, props.maxEntries));

  useEffect(() => listenToActionCollection(setActionsData, props.name, props.maxEntries), [props.name]);

  const renderItem = (action: ListRenderItemInfo<ActionModel>) => (
    <ActionListItem
      action={action.item}
      dialog={props.dialog}
    />
  );

  return (
    <FlatList
      style={{ borderTopWidth: 0.5, borderTopColor: 'gray', }}
      data={actionsData}
      keyExtractor={(action: ActionModel) => action.id}
      renderItem={renderItem}
    />
  );
};

export default ActionListView;
