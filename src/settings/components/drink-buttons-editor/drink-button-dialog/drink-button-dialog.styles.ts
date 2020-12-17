import { StyleSheet } from 'react-native';

export const CAROUSEL_WIDTH = 250;
export const CAROUSEL_ITEM_SIZE = 60;
export const CAROUSEL_INACTIVE_ITEM_SCALE = 0.5;
export const CAROUSEL_INACTIVE_ITEM_OPACITY = 0.4;

const DrinkButtonDialogStyles = StyleSheet.create({
  textInput: {
    marginTop: 8
  },
  carouselItem: {
    justifyContent: 'center'
  },
  carouselImage: {
    width: CAROUSEL_ITEM_SIZE,
    height: CAROUSEL_ITEM_SIZE
  },
  carouselRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  carouselContainer: {
    width: CAROUSEL_WIDTH,
  }
});

export default DrinkButtonDialogStyles;
