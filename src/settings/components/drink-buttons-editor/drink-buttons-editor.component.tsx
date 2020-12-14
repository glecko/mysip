import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList, ListRenderItemInfo, Text, View
} from 'react-native';
import styles from './drink-buttons-editor.styles';
import { getAlcoholicDrinks, listenToAlcoholicDrinksCollection } from '../../../drinks/hooks/application';
import { AlcoholicDrinkModel } from '../../models/model';
import DrinkButtonItem from './drink-button-item/drink-button-item.component';
import DrinkButtonDialog from './drink-button-dialog/drink-button-dialog.component';

const DrinkButtonsEditorComponent = () => {
  const [drinks, setDrinks] = useState(getAlcoholicDrinks());
  const [editDialogVisible, setEditDialogVisible] = useState(false);

  const onEditDialogClose = () => setEditDialogVisible(false);

  useEffect(() => listenToAlcoholicDrinksCollection(setDrinks), []);

  const renderItem = (drink: ListRenderItemInfo<AlcoholicDrinkModel>) => (
    <DrinkButtonItem
      drink={drink.item}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Drink buttons</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={drinks}
          keyExtractor={(drink: AlcoholicDrinkModel) => drink.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <Button title="Add drink button" onPress={() => setEditDialogVisible(true)} />
        <DrinkButtonDialog
          drink={undefined}
          onDialogConfirm={onEditDialogClose}
          onDismiss={onEditDialogClose}
          visible={editDialogVisible}
        />
      </View>
    </View>
  );
};

export default DrinkButtonsEditorComponent;
