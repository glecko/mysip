import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
// @ts-ignore
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './drink-button-item.styles';
import { DrinkButtonItemModel } from './drink-button-item.model';
import AlertConfirmButton from '../../../../shared/components/alert-confirm-button/alert-confirm-button.component';
import { deleteAlcoholicDrink } from '../../../../drinks/hooks/application';
import { getDrinkDescription } from '../../../../drinks/hooks/display';
import { getDrinkImage } from '../../../../shared/hooks/images';
import DrinkButtonDialog from '../drink-button-dialog/drink-button-dialog.component';

const DrinkButtonItem = (props: DrinkButtonItemModel) => {
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const onEditDialogClose = () => setEditDialogVisible(false);

  const deleteCurrentDrink = () => deleteAlcoholicDrink(props.drink);
  const alertText = `Are you sure you want to delete this button? (${getDrinkDescription(props.drink)})`;

  const actionRightButtons = () => {
    const renderButtonContentFn = () => (
      <View style={[styles.actionButton, { backgroundColor: 'red' }]}>
        <Icon size={30} name="delete" color="white" />
      </View>
    );
    return [
      <View>
        <TouchableHighlight onPress={() => setEditDialogVisible(true)} style={[styles.actionButton, { backgroundColor: 'lightseagreen' }]}>
          <Icon size={30} name="edit" color="white" />
        </TouchableHighlight>
      </View>,
      <AlertConfirmButton
        onConfirm={deleteCurrentDrink}
        alertText={alertText}
        alertTitle="Delete action?"
        renderContentFn={renderButtonContentFn}
      />,
    ];
  };

  const text = getDrinkDescription(props.drink);
  return (
    <Swipeable rightButtons={actionRightButtons()}>
      <View style={styles.swipeRowFront}>
        <View style={styles.description}>
          <Image style={styles.image} source={getDrinkImage(props.drink.imageName)} />
          <Text>{text}</Text>
        </View>
      </View>
      <DrinkButtonDialog
        drink={props.drink}
        onDialogConfirm={onEditDialogClose}
        onDismiss={onEditDialogClose}
        visible={editDialogVisible}
      />
    </Swipeable>
  );
};

export default DrinkButtonItem;
