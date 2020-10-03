import React from 'react';
import { View, Button } from 'react-native';
import { ActionRegisterButtonModel } from './action-register-button.model';
import { RealmService } from '../../../storage/realm';
import { ActionSchema, createActionModel } from '../../../storage/actions/schema';
import ImageButton from '../../shared/image-button/image-button.component';
import { ActionRegisterButtonStyles } from './action-register-button.styles';

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

  let imageButton;
  if (props.imageUrl) {
    const styles = {
      image: ActionRegisterButtonStyles.image,
      container: ActionRegisterButtonStyles.container,
      button: ActionRegisterButtonStyles.button
    };
    imageButton = <ImageButton onPress={onAddActionPress} imageUrl={props.imageUrl} styles={styles} />;
  }

  return (
    <View>
      {imageButton}
      <Button onPress={onAddActionPress} title={text} />
    </View>
  );
};

export default ActionRegisterButton;
