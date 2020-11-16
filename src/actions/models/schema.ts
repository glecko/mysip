export interface ActionModel {
  id: string;
  date: Date;
  amount: number;
  type: string;
  subtype: string;
  note?: string;
  registerDate: Date;
}

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
