export const AlcoholicDrinkSchema = {
  name: 'DrinkButton',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    volume: 'float',
    content: 'float',
    imageName: 'string',
    buttonColor: 'string',
    sortingIndex: 'int'
  },
};
