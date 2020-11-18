import React from 'react';
import {
  View, Button, Alert, TouchableHighlight
} from 'react-native';
import { AlertConfirmButtonModel } from './alert-confirm-button.model';

const AlertConfirmButton = (props: AlertConfirmButtonModel) => {
  const buttonPress = () => {
    const alertText = props.alertTextFn ? props.alertTextFn() : props.alertText;
    Alert.alert(props.alertTitle, alertText, [
      { text: 'Cancel', onPress: () => (props.onCancel ? props.onCancel() : null), style: 'cancel' },
      { text: 'Confirm', onPress: () => (props.onConfirm ? props.onConfirm() : null) },
    ]);
  };

  if (props.renderContentFn) {
    return (
      <TouchableHighlight onPress={buttonPress}>{props.renderContentFn()}</TouchableHighlight>
    );
  }
  if (props.buttonText) {
    return (
      <View>
        <Button onPress={buttonPress} title={props.buttonText} />
      </View>
    );
  }
  throw Error('Neither the buttonContent nor the buttonText prop were defined in the component');
};

export default AlertConfirmButton;
