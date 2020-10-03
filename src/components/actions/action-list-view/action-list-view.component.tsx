import React, { useEffect, useState } from 'react';
import {
  View, Text, SafeAreaView, TouchableHighlight
} from 'react-native';
import { ListView } from 'realm/react-native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RealmService } from '../../../storage/realm';
import {
  ActionModel,
  ActionSchema,
  displayAction,
} from '../../../storage/actions/schema';
import { ActionListViewModel } from './action-list-view.model';
import { ActionListViewStyles } from './action-list-view.styles';
import AlertConfirmButton from '../../shared/alert-confirm-button/alert-confirm-button.component';

Icon.loadFont();

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1: ActionModel, r2: ActionModel) => r1.id !== r2.id,
});

function getData(filterType: string, limit: number) {
  const actions = RealmService.realmInstance.objects<ActionModel>(
    ActionSchema.name
  );
  return actions.filtered(
    `type = "${filterType}" SORT(date DESC) LIMIT(${limit})`,
  );
}

function buildInitialState(filterType: string, limit: number) {
  const typeActions = getData(filterType, limit);
  return dataSource.cloneWithRows(typeActions);
}

function deleteAction(action: ActionModel) {
  RealmService.deleteObjectById(ActionSchema.name, action.id);
}

const ActionListView = (props: ActionListViewModel) => {
  const [actionsData, setActionsData] = useState(
    buildInitialState(props.name, props.maxEntries),
  );

  useEffect(() => {
    const typeActions = getData(props.name, props.maxEntries);
    setActionsData(dataSource.cloneWithRows(typeActions));
    typeActions.addListener(() => {
      setActionsData(dataSource.cloneWithRows(typeActions));
    });
  }, [props.name]);

  const actionRightButtons = (action: ActionModel) => {
    const deleteCurrentAction = () => deleteAction(action);
    const alertText = `Are you sure you want to delete this action? (${displayAction(action, true)})`;
    const renderButtonContentFn = () => (
      <View style={ActionListViewStyles.deleteButton}>
        <Icon size={30} name="delete" color="white" />
      </View>
    );
    return [
      <AlertConfirmButton
        onConfirm={deleteCurrentAction}
        alertText={alertText}
        alertTitle={'Delete action?'}
        renderContentFn={renderButtonContentFn}
      />
    ];
  };

  const renderAction = (action: ActionModel) => {
    const text = displayAction(action, true);
    return (
      <Swipeable rightButtons={actionRightButtons(action)}>
        <View style={ActionListViewStyles.swipeRowFront}>
          <Text>{text}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <ListView dataSource={actionsData} renderRow={renderAction} />
      </View>
    </SafeAreaView>
  );
};

export default ActionListView;
