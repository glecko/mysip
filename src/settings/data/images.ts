import { ImageSourcePropType } from 'react-native';

/* eslint-disable global-require */
export const DEFAULT_DRINK_IMAGE = require('@images/drink-icons/random-drinks.png');

export const IMAGE_NAME_MAPPING: { [name: string]: ImageSourcePropType } = {
  'beer-glass': require('@images/drink-icons/beer-glass.png'),
  'beer-bottle': require('@images/drink-icons/beer-bottle.png'),
  'beer-jar': require('@images/drink-icons/beer-jar.png'),
  'wine-glass': require('@images/drink-icons/wine-glass.png'),
  'wine-bottle': require('@images/drink-icons/wine-bottle.png'),
  'shot-glass': require('@images/drink-icons/shot-glass.png'),
  'long-drink': require('@images/drink-icons/long-drink.png'),
  'whisky-glass': require('@images/drink-icons/whisky-glass.png'),
  cocktail: require('@images/drink-icons/cocktail.png'),
};
/* eslint-enable global-require */
