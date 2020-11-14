import React from 'react';
import { View, Text } from 'react-native';
import { FullActionRegisterButtonModel } from './action-register-button.model';
import ImageButton from '../../../shared/components/image-button/image-button.component';
import { ActionRegisterButtonStyles, ActionRegisterImageButtonStyles } from './action-register-button.styles';
import { createEmptyAction } from '../../hooks/application';

const ActionRegisterButton = (props: FullActionRegisterButtonModel) => {
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
    <View style={props.style ? props.style : ActionRegisterButtonStyles.containerDefault}>
      <ImageButton
        onPress={() => createEmptyAction(props.type, props.amount, props.subtype)}
        image={props.image}
        styles={styles}
        textElement={textElement}
      />
    </View>
  );
};

export default ActionRegisterButton;
