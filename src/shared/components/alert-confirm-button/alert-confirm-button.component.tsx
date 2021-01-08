import React from 'react';
import { Alert, TouchableHighlight } from 'react-native';
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
    <TouchableHighlight onPress={buttonPress}>{props.children}</TouchableHighlight>
  );
};

export default AlertConfirmButton;
