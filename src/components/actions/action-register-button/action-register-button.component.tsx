import React from 'react';
import { View, Text } from 'react-native';
import { FullActionRegisterButtonModel } from './action-register-button.model';
import { RealmService } from '../../../storage/realm';
import { ActionSchema, createActionModel } from '../../../storage/actions/schema';
import ImageButton from '../../shared/image-button/image-button.component';
import { ActionRegisterButtonStyles, ActionRegisterImageButtonStyles } from './action-register-button.styles';

const ActionRegisterButton = (props: FullActionRegisterButtonModel) => {
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
  const mainText = props.text ? props.text : `Add ${props.subtype} (${props.amount} ${typeText})`;

  const textElement = (
    <View style={ActionRegisterButtonStyles.textContainer}>
      <Text style={ActionRegisterButtonStyles.mainText}>{mainText}</Text>
      <View style={ActionRegisterButtonStyles.bottomTextContainer}>
        <Text style={ActionRegisterButtonStyles.bottomLeftText}>{props.bottomLeftText}</Text>
        <Text style={ActionRegisterButtonStyles.bottomRightText}>{props.bottomRightText}</Text>
      </View>
    </View>
  );

  const styles = {
    image: ActionRegisterImageButtonStyles.image,
    button: ActionRegisterImageButtonStyles.button,
    container: ActionRegisterImageButtonStyles.container,
  };
  return (
    <View style={ActionRegisterButtonStyles.container}>
      <ImageButton onPress={onAddActionPress} imageUrl={props.imageUrl} styles={styles} textElement={textElement} />
    </View>
  );
};

export default ActionRegisterButton;
