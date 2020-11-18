export const ActionSchema = {
  name: 'Action',
  primaryKey: 'id',
  properties: {
    id: 'string',
    date: 'date',
    amount: 'float',
    type: 'string',
    subtype: 'string',
    note: 'string?',
    registerDate: 'date',
  },
};
