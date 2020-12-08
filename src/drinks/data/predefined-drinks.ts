import { AlcoholicDrinkModel } from '../models/model';

/* eslint-disable global-require */
export const CUSTOM_DRINKS_BUTTON_PROPERTIES = {
  image: require('@images/drink-icons/random-drinks.png'),
  buttonColor: '#cceeff',
  text: 'Another drink type',
  dialogTitle: 'Add custom drink type'
};

export const DRINK_EDIT_DIALOG_SUBTYPE_PLACEHOLDER = 'Drink name';
export const DRINK_EDIT_DIALOG_AMOUNT_PLACEHOLDER = 'Amount (in alcohol units)';

export const PREDEFINED_DRINKS: AlcoholicDrinkModel[] = [
  {
    name: 'beer',
    volume: 200,
    content: 0.05,
    image: require('@images/drink-icons/beer-glass.png'),
    buttonColor: '#FAE96F'
  },
  {
    name: 'bottle',
    volume: 330,
    content: 0.05,
    image: require('@images/drink-icons/beer-bottle.png'),
    buttonColor: '#FAE96F'
  },
  {
    name: 'pint',
    volume: 500,
    content: 0.05,
    image: require('@images/drink-icons/beer-jar.png'),
    buttonColor: '#FAE96F'
  },
  {
    name: 'dark beer',
    volume: 200,
    content: 0.08,
    image: require('@images/drink-icons/beer-glass.png'),
    buttonColor: '#fec806'
  },
  {
    name: 'bottle (dark)',
    volume: 330,
    content: 0.08,
    image: require('@images/drink-icons/beer-bottle.png'),
    buttonColor: '#fec806'
  },
  {
    name: 'pint (dark)',
    volume: 500,
    content: 0.08,
    image: require('@images/drink-icons/beer-jar.png'),
    buttonColor: '#fec806'
  },
  {
    name: 'wine glass',
    volume: 200,
    content: 0.12,
    image: require('@images/drink-icons/wine-glass.png'),
    buttonColor: '#ffb9b9'
  },
  {
    name: '1/2 glass',
    volume: 100,
    content: 0.12,
    image: require('@images/drink-icons/wine-glass.png'),
    buttonColor: '#ffb9b9'
  },
  {
    name: 'wine bottle',
    volume: 700,
    content: 0.12,
    image: require('@images/drink-icons/wine-bottle.png'),
    buttonColor: '#ffb9b9'
  },
  {
    name: 'spirit drink',
    volume: 100,
    content: 0.35,
    image: require('@images/drink-icons/whisky-glass.png'),
    buttonColor: '#e3e3e3'
  },
  {
    name: 'shot',
    volume: 20,
    content: 0.35,
    image: require('@images/drink-icons/shot-glass.png'),
    buttonColor: '#e3e3e3'
  },
  {
    name: 'double shot',
    volume: 40,
    content: 0.35,
    image: require('@images/drink-icons/shot-glass.png'),
    buttonColor: '#e3e3e3'
  },
  {
    name: 'long drink',
    volume: 70,
    content: 0.35,
    image: require('@images/drink-icons/long-drink.png'),
    buttonColor: '#e995a6'
  },
  {
    name: 'cocktail',
    volume: 100,
    content: 0.17,
    image: require('@images/drink-icons/cocktail.png'),
    buttonColor: '#91ffad'
  },
];

/* eslint-enable global-require */
