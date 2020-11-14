import { AlcoholicDrinkModel } from '../models/model';

export const CUSTOM_DRINKS_BUTTON_IMAGE = require('../../static/images/drink-icons/random-drinks.png');

export const PREDEFINED_DRINKS: AlcoholicDrinkModel[] = [
  {
    name: 'beer',
    volume: 200,
    content: 0.05,
    image: require('../../static/images/drink-icons/beer-glass.png'),
    buttonColor: '#FAE96F'
  },
  {
    name: 'bottle',
    volume: 330,
    content: 0.05,
    image: require('../../static/images/drink-icons/beer-bottle.png'),
    buttonColor: '#FAE96F'
  },
  {
    name: 'pint',
    volume: 500,
    content: 0.05,
    image: require('../../static/images/drink-icons/beer-jar.png'),
    buttonColor: '#FAE96F'
  },
  {
    name: 'dark beer',
    volume: 200,
    content: 0.08,
    image: require('../../static/images/drink-icons/beer-glass.png'),
    buttonColor: '#F6C101'
  },
  {
    name: 'bottle (dark)',
    volume: 330,
    content: 0.08,
    image: require('../../static/images/drink-icons/beer-bottle.png'),
    buttonColor: '#F6C101'
  },
  {
    name: 'pint (dark)',
    volume: 500,
    content: 0.08,
    image: require('../../static/images/drink-icons/beer-jar.png'),
    buttonColor: '#F6C101'
  },
  {
    name: '1/2 wine glass',
    volume: 100,
    content: 0.12,
    image: require('../../static/images/drink-icons/wine-glass.png'),
    buttonColor: '#ffb9b9'
  },
  {
    name: 'wine glass',
    volume: 200,
    content: 0.12,
    image: require('../../static/images/drink-icons/wine-glass.png'),
    buttonColor: '#ffb9b9'
  },
  {
    name: 'wine bottle',
    volume: 700,
    content: 0.12,
    image: require('../../static/images/drink-icons/wine-bottle.png'),
    buttonColor: '#ffb9b9'
  },
  {
    name: 'long drink',
    volume: 70,
    content: 0.35,
    image: require('../../static/images/drink-icons/long-drink.png'),
    buttonColor: 'white'
  },
  {
    name: 'spirit drink',
    volume: 100,
    content: 0.35,
    image: require('../../static/images/drink-icons/whisky-glass.png'),
    buttonColor: 'white'
  },
  {
    name: 'cocktail',
    volume: 100,
    content: 0.17,
    image: require('../../static/images/drink-icons/cocktail.png'),
    buttonColor: 'white'
  },
  {
    name: 'shot',
    volume: 20,
    content: 0.35,
    image: require('../../static/images/drink-icons/shot-glass.png'),
    buttonColor: 'white'
  },
  {
    name: 'double shot',
    volume: 40,
    content: 0.35,
    image: require('../../static/images/drink-icons/shot-glass.png'),
    buttonColor: 'white'
  },
];
