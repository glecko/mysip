import React from 'react';
import { View, Text } from 'react-native';
import { ActionRegisterButtonModel } from './action-register-button.model';
import ImageButton from '../../../shared/components/image-button/image-button.component';
import { ActionRegisterButtonStyles, ActionRegisterImageButtonStyles } from './action-register-button.styles';
import { createEmptyAction } from '../../hooks/application';

const ActionRegisterButton = (props: ActionRegisterButtonModel) => {
  const typeText = `${props.type}${props.amount === 1 ? '' : 's'}`;
  const mainText = props.text ? props.text : `Add ${props.subtype} (${props.amount} ${typeText})`;

  const textElement = (
    <View style={ActionRegisterButtonStyles.textContainer}>
      <View style={ActionRegisterButtonStyles.mainTextContainer}>
        <Text ellipsizeMode="tail" numberOfLines={2} style={ActionRegisterButtonStyles.mainText}>{mainText}</Text>
      </View>
      <View style={ActionRegisterButtonStyles.bottomTextContainer}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={ActionRegisterButtonStyles.bottomLeftText}>{props.bottomLeftText}</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={ActionRegisterButtonStyles.bottomRightText}>{props.bottomRightText}</Text>
      </View>
    </View>
  );

  const styles = {
    image: ActionRegisterImageButtonStyles.image,
    button: ActionRegisterImageButtonStyles.button,
    container: ActionRegisterImageButtonStyles.container,
  };
  return (
    <View style={props.style}>
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
