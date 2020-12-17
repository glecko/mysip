import { ImageSourcePropType } from 'react-native';

/* eslint-disable global-require */

export const DRINK_IMAGE_NAME_MAPPING: { [name: string]: ImageSourcePropType } = {
  'beer-glass': require('@images/drink-icons/beer-glass.png'),
  'beer-bottle': require('@images/drink-icons/beer-bottle.png'),
  'beer-jar': require('@images/drink-icons/beer-jar.png'),
  'wine-glass': require('@images/drink-icons/wine-glass.png'),
  'wine-bottle': require('@images/drink-icons/wine-bottle.png'),
  'shot-glass': require('@images/drink-icons/shot-glass.png'),
  'tequila-shot': require('@images/drink-icons/tequila-shot.png'),
  'rum-bottle': require('@images/drink-icons/rum-bottle.png'),
  'whisky-glass': require('@images/drink-icons/whisky-glass.png'),
  'long-drink': require('@images/drink-icons/long-drink.png'),
  cocktail: require('@images/drink-icons/cocktail.png'),
  mojito: require('@images/drink-icons/mojito.png'),
  jug: require('@images/drink-icons/jug.png'),
  coffee: require('@images/drink-icons/coffee.png'),

  default: require('@images/drink-icons/random-drinks.png'),
};
/* eslint-enable global-require */
