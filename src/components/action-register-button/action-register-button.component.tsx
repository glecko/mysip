import React from 'react';
import { View, Button } from 'react-native';
import { ActionRegisterButtonModel } from './action-register-button.model';
import { RealmService } from '../storage/realm';
import { ActionSchema, createActionModel } from '../storage/actions/schema';

const ActionRegisterButton = (props: ActionRegisterButtonModel) => {
  const onAddActionPress = () => {
    const action = createActionModel(
      props.type,
      props.amount,
      props.subtype,
      ''
    );
    RealmService.write(ActionSchema.name, action);
  };

  const typeText = `${props.type}${props.amount === 1 ? '' : 's'}`;
  const text = `Add ${props.subtype} (${props.amount} ${typeText})`;
  return (
    <View>
      <Button onPress={onAddActionPress} title={text} />
    </View>
  );
};

export default ActionRegisterButton;
