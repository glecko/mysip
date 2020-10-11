import Realm from 'realm';
import { ActionSchema } from './actions/schema';

class RealmServiceClass {
  constructor() {
    this.realmInstance = new Realm({ schema: [ActionSchema] });
  }

  realmInstance: Realm;

  write<T>(model: string, data: any) {
    this.realmInstance.write(() => {
      this.realmInstance.create(model, data, Realm.UpdateMode.All);
    });
  }

  deleteLastFilteredModelEntry(model: string, dateProperty: string) {
    this.realmInstance.write(() => {
      const lastEntry = this.getLastModelEntry(model, dateProperty);
      if (lastEntry) {
        this.realmInstance.delete(lastEntry);
      }
    });
  }

  getLastModelEntry<T>(model: string, dateProperty: string): T & Realm.Object {
    const collection = this.realmInstance.objects<T>(model);
    const [lastEntry] = collection.sorted(dateProperty, true);
    return lastEntry;
  }

  deleteObjectsByQuery(model: string, query: string) {
    this.realmInstance.write(() => {
      const collection = this.realmInstance.objects(model);
      const queryResults = collection.filtered(query);
      this.realmInstance.delete(queryResults);
    });
  }

  deleteObjectById(model: string, id: string) {
    this.deleteObjectsByQuery(model, `id = '${id}'`);
  }
}

export const RealmService = new RealmServiceClass();
