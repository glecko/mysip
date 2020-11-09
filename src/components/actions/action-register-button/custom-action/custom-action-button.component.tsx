import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CustomActionRegisterButtonModel } from '../action-register-button.model';
import { ActionRegisterButtonStyles, ActionRegisterImageButtonStyles } from '../action-register-button.styles';
import ImageButton from '../../../shared/image-button/image-button.component';
import ActionEditDialog from '../../action-list-view/action-list-item/action-edit-dialog/action-edit-dialog.component';
import { ActionModel } from '../../../../storage/actions/schema';
import { ActionStub } from '../../action-list-view/action-list-item/action-edit-dialog/action-edit-dialog.model';

const CustomActionButton = (props: CustomActionRegisterButtonModel) => {
  const [visible, setVisible] = useState(false);
  const mainText = props.text ? props.text : `Add custom ${props.type}`;
  const onDialogClosed = () => setVisible(false);

  const emptyAction: ActionStub = {
    type: props.type,
    subtype: '',
    amount: 0,
    note: '',
    date: new Date(),
  };

  const textElement = (
    <View style={ActionRegisterButtonStyles.textContainer}>
      <Text style={ActionRegisterButtonStyles.mainText}>{mainText}</Text>
    </View>
  );

  const styles = {
    image: ActionRegisterImageButtonStyles.image,
    button: ActionRegisterImageButtonStyles.button,
    container: ActionRegisterImageButtonStyles.container,
  };
  return (
    <View>
      <View style={ActionRegisterButtonStyles.container}>
        <ImageButton onPress={() => setVisible(true)} imageUrl={props.imageUrl} styles={styles} textElement={textElement} />
      </View>
      <ActionEditDialog action={emptyAction} visible={visible} onDismiss={onDialogClosed} onDialogConfirm={onDialogClosed}/>
    </View>
  );
};

export default CustomActionButton;
