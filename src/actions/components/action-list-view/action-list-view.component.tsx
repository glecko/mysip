import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, FlatList, ListRenderItemInfo
} from 'react-native';
import { ActionModel } from '../../models/schema';
import { ActionListViewModel } from './action-list-view.model';
import ActionListItem from './action-list-item/action-list-item.component';
import { getActions } from '../../hooks/application';

function buildInitialState(filterType: string, limit?: number) {
  return getActions(filterType, limit);
}

const ActionListView = (props: ActionListViewModel) => {
  const [actionsData, setActionsData] = useState(
    buildInitialState(props.name, props.maxEntries),
  );

  useEffect(() => {
    const typeActions = getActions(props.name, props.maxEntries);
    setActionsData(typeActions);
    typeActions.addListener(() => {
      const actions = getActions(props.name, props.maxEntries);
      setActionsData(actions);
    });
  }, [props.name]);

  return (
    <SafeAreaView>
      <FlatList
        data={actionsData}
        keyExtractor={(action: ActionModel) => action.id}
        renderItem={(action: ListRenderItemInfo<ActionModel>) => <ActionListItem action={action.item} />}
      />
    </SafeAreaView>
  );
};

export default ActionListView;
