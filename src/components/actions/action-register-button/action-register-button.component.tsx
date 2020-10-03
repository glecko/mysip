import React from 'react';
import { View, Button } from 'react-native';
import { ActionRegisterButtonModel } from './action-register-button.model';
import { RealmService } from '../../../storage/realm';
import { ActionSchema, createActionModel } from '../../../storage/actions/schema';
import ImageButton from '../../shared/image-button/image-button.component';
import { ActionRegisterButtonStyles, ActionRegisterImageButtonStyles } from './action-register-button.styles';

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
  const text = props.text ? props.text : `Add ${props.subtype} (${props.amount} ${typeText})`;

  if (props.imageUrl) {
    const styles = {
      image: ActionRegisterImageButtonStyles.image,
      button: ActionRegisterImageButtonStyles.button,
      container: ActionRegisterImageButtonStyles.container,
      text: ActionRegisterImageButtonStyles.text,
    };
    return (
      <View style={ActionRegisterButtonStyles.container}>
        <ImageButton onPress={onAddActionPress} imageUrl={props.imageUrl} styles={styles} text={text} />
      </View>
    );
  } else {
    return (
      <View style={ActionRegisterButtonStyles.container}>
        <Button onPress={onAddActionPress} title={text} />
      </View>
    );
  }
};

export default ActionRegisterButton;
