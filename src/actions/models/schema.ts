export interface ActionModel {
  id: string;
  date: Date;
  amount: number;
  type: string;
  subtype: string;
  note?: string;
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
  },
};
