import React, { useEffect, useState } from 'react';
import {
  Button, Dialog, Portal, TextInput
} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {
  Image, ListRenderItemInfo, View
} from 'react-native';
import { DrinkButtonDialogModel } from './drink-button-dialog.model';
import { upsertAlcoholicDrink } from '../../../../drinks/hooks/application';
import styles, {
  CAROUSEL_INACTIVE_ITEM_OPACITY,
  CAROUSEL_INACTIVE_ITEM_SCALE,
  CAROUSEL_ITEM_SIZE,
  CAROUSEL_WIDTH
} from './drink-button-dialog.styles';
import { DRINK_IMAGE_NAME_MAPPING } from '../../../../drinks/data/images';
import { getDrinkImage } from '../../../../shared/hooks/images';
import { AVAILABLE_DRINK_BUTTON_COLORS } from '../../../../drinks/data/colors';
import ColorSelectorComponent from '../../../../shared/components/color-selector/color-selector.component';

const DrinkButtonDialog = (props: DrinkButtonDialogModel) => {
  const [buttonColor, setButtonColor] = useState(props.drink.buttonColor);
  const [imageName, setImageName] = useState(props.drink.imageName);
  const [name, setName] = useState(props.drink.name);
  const [volume, setVolume] = useState(props.drink.volume.toFixed(0));
  const [content, setContent] = useState((props.drink.content * 100).toFixed(2));
  const [carouselRef, setCaroulselRef] = useState<Carousel<string> | null>(null);

  const carouselImages = Object.keys(DRINK_IMAGE_NAME_MAPPING);
  const carouselStartIndex = carouselImages.findIndex((entry: string) => entry === imageName);
  const onCarouselImageSelected = (slideIndex: number) => setImageName(carouselImages[slideIndex]);

  const resetDialog = () => {
    setImageName(props.drink.imageName);
    setName(props.drink.name);
    setVolume(props.drink.volume.toFixed(0));
    setContent((props.drink.content * 100).toFixed(2));
    setButtonColor(props.drink.buttonColor);
    if (carouselRef) {
      const originalCarouselIndex = carouselImages.findIndex((entry: string) => entry === props.drink.imageName);
      carouselRef.snapToItem(originalCarouselIndex, false);
    }
  };

  useEffect(() => {
    resetDialog();
  }, [props.visible]);

  const isValidForm = name !== '' && parseFloat(volume) > 0 && parseFloat(content) > 0;

  const onDialogConfirm = () => {
    upsertAlcoholicDrink({
      id: props.drink.id,
      name,
      volume: parseFloat(volume),
      content: parseFloat(content) / 100,
      sortingIndex: props.drink.sortingIndex,
      imageName,
      buttonColor,
    });
    props.onDialogConfirm();
  };

  const onDismiss = () => {
    props.onDismiss();
  };

  const renderCarouselItem = (info: ListRenderItemInfo<string>) => {
    const image = getDrinkImage(info.item);
    return (
      <View style={styles.carouselItem}>
        <Image style={styles.carouselImage} source={image} />
      </View>
    );
  };

  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={onDismiss}>
        <Dialog.Title>Drink button</Dialog.Title>
        <Dialog.Content>
          <View style={styles.carouselRowContainer}>
            <View style={styles.carouselContainer}>
              <Carousel
                ref={(c) => setCaroulselRef(c)}
                data={carouselImages}
                renderItem={renderCarouselItem}
                sliderWidth={CAROUSEL_WIDTH}
                itemWidth={CAROUSEL_ITEM_SIZE}
                inactiveSlideOpacity={CAROUSEL_INACTIVE_ITEM_OPACITY}
                inactiveSlideScale={CAROUSEL_INACTIVE_ITEM_SCALE}
                firstItem={carouselStartIndex}
                onSnapToItem={onCarouselImageSelected}
              />
            </View>
          </View>
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Name"
            defaultValue={name}
            onChangeText={(text) => setName(text)}
            style={styles.textInput}
          />
          <TextInput
            mode="outlined"
            label="Volume (ml)"
            placeholder="Volume (ml)"
            keyboardType="numeric"
            onChangeText={(text) => setVolume(text)}
            defaultValue={volume}
            style={styles.textInput}
          />
          <TextInput
            mode="outlined"
            label="Content (%)"
            placeholder="Content (%)"
            keyboardType="numeric"
            onChangeText={(text) => setContent(text)}
            defaultValue={content}
            style={styles.textInput}
          />
          <ColorSelectorComponent
            initialColor={buttonColor}
            options={AVAILABLE_DRINK_BUTTON_COLORS}
            onChange={(color) => setButtonColor(color)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancel</Button>
          <Button disabled={!isValidForm} onPress={onDialogConfirm}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DrinkButtonDialog;
