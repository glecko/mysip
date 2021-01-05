import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CustomActionRegisterButtonModel } from '../action-register-button.model';
import { ActionRegisterButtonStyles, ActionRegisterImageButtonStyles } from '../action-register-button.styles';
import ImageButton from '../../../../shared/components/image-button/image-button.component';
import ActionEditDialog from '../../action-edit-dialog/action-edit-dialog.component';
import { ActionStub } from '../../../models/models';

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
    registerDate: new Date(),
  };

  const textElement = (
    <View style={ActionRegisterButtonStyles.textContainer}>
      <View style={ActionRegisterButtonStyles.mainTextContainer}>
        <Text style={ActionRegisterButtonStyles.mainText}>{mainText}</Text>
      </View>
    </View>
  );

  const styles = {
    image: ActionRegisterImageButtonStyles.image,
    button: ActionRegisterImageButtonStyles.button,
    container: ActionRegisterImageButtonStyles.container,
  };
  return (
    <View>
      <View style={props.style}>
        <ImageButton onPress={() => setVisible(true)} image={props.image} styles={styles} textElement={textElement} />
      </View>
      <ActionEditDialog
        title={props.dialogTitle}
        action={emptyAction}
        visible={visible}
        onDismiss={onDialogClosed}
        onDialogConfirm={onDialogClosed}
        subtypePlaceholder={props.dialogOptions?.subtypePlaceholder}
        amountPlaceholder={props.dialogOptions?.amountPlaceholder}
        notePlaceholder={props.dialogOptions?.notePlaceholder}
      />
    </View>
  );
};

export default CustomActionButton;
