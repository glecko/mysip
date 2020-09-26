import React from 'react';
import { View, Button, Alert } from 'react-native';
import { AlertConfirmButtonModel } from './alert-confirm-button.model';

const AlertConfirmButton = (props: AlertConfirmButtonModel) => {
  const buttonPress = () => {
    const alertText = props.alertTextFn ? props.alertTextFn() : props.alertText;
    Alert.alert(props.alertTitle, alertText, [
      { text: 'Cancel', onPress: () => (props.onCancel ? props.onCancel() : null), style: 'cancel' },
      { text: 'Confirm', onPress: () => (props.onConfirm ? props.onConfirm() : null) },
    ]);
  };

  return (
    <View>
      <Button onPress={buttonPress} title={props.buttonText} />
    </View>
  );
};

export default AlertConfirmButton;
