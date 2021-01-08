import React, {
  forwardRef,
  ReactElement, Ref, useImperativeHandle, useRef
} from 'react';
import {
  View, TouchableHighlight, Pressable
} from 'react-native';
// @ts-ignore
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AlertConfirmButton from '../alert-confirm-button/alert-confirm-button.component';
import styles from './swipeable-dialog-item.styles';
import { SwipeableDialogItemModel, SwipeableDialogItemModelHandle } from './swipeable-dialog-item.model';

const SwipeableDialogItem = (props: SwipeableDialogItemModel, ref: Ref<SwipeableDialogItemModelHandle>): ReactElement => {
  const swipeable = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    recenter: () => {
      if (swipeable.current) swipeable.current.recenter();
    }
  }));

  const onItemPress = () => {
    if (swipeable.current) swipeable.current.bounceRight();
  };

  const actionRightButtons = [
    <View>
      <TouchableHighlight onPress={props.onEdit} style={[styles.actionButton, { backgroundColor: 'lightseagreen' }]}>
        <Icon size={30} name="edit" color="white" />
      </TouchableHighlight>
    </View>,
    <AlertConfirmButton
      onConfirm={props.onDelete}
      alertText={props.deleteAlertText}
      alertTitle="Delete action?"
    >
      <View style={[styles.actionButton, { backgroundColor: 'red' }]}>
        <Icon size={30} name="delete" color="white" />
      </View>
    </AlertConfirmButton>,
  ];

  return (
    <Swipeable
      ref={swipeable}
      rightButtons={actionRightButtons}
      onRightActionRelease={props.onSwipe}
    >
      <Pressable onPress={onItemPress} style={styles.swipeRowFront}>
        {props.children}
      </Pressable>
    </Swipeable>
  );
};

export default forwardRef(SwipeableDialogItem);
