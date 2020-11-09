import Realm from 'realm';
import { ActionSchema } from './actions/schema';

class RealmServiceClass {
  constructor() {
    this.realmInstance = new Realm({ schema: [ActionSchema] });
  }

  realmInstance: Realm;

  create<T>(model: string, data: { [property: string]: any }) {
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

  update<T>(model: string, id: string, data: { [property: string]: any }) {
    const instance = this.getEntityById<T>(model, id, true);
    this.realmInstance.write(() => {
      for (const [key, value] of Object.entries(data)) {
        if (key === 'id') continue;
        instance[key] = value;
      }
    });
  }

  upsert<T>(model: string, data: { [property: string]: any }) {
    if (data.id) {
      const entity = this.getEntityById(model, data.id, false);
      if (entity) {
        this.update<T>(model, data.id, data);
        return;
      }
    }
    this.create(model, data);
  }

  getEntityById<T>(model: string, id: string, throwIfNotFound: boolean) {
    const collection = this.realmInstance.objects<T>(model);
    const [entity] = collection.filtered(`id = '${id}'`);
    if (!entity && throwIfNotFound) throw Error(`Model '${model}' with ID ${id} could not be found in the database.`);
    return entity;
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
    const entity = this.getEntityById(model, id, true);
    this.realmInstance.write(() => {
      this.realmInstance.delete([entity]);
    });
  }
}

export const RealmService = new RealmServiceClass();
