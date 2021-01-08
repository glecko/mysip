import Realm from 'realm';
import { REALM_SCHEMAS } from './migrations';
import { RealmEntry } from './models';
import { REALM_INIT_FUNCTIONS } from './init';

class RealmServiceClass {
  private static executeMigrations() {
    // The first schema to update to is the current schema version
    // since the first schema in our array is at nextSchemaIndex:
    let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);

    // If Realm.schemaVersion() returned -1, it means this is a new Realm file
    // so no migration is needed.
    if (nextSchemaIndex !== -1) {
      while (nextSchemaIndex < REALM_SCHEMAS.length) {
        const migratedRealm = new Realm(REALM_SCHEMAS[nextSchemaIndex]);
        nextSchemaIndex += 1;
        migratedRealm.close();
      }
    }
  }

  constructor() {
    RealmServiceClass.executeMigrations();
    this.realmInstance = new Realm(REALM_SCHEMAS[REALM_SCHEMAS.length - 1]);
    this.executeInitFunctions();
  }

  realmInstance: Realm;

  create(model: string, data: { [property: string]: any }) {
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

  update<T extends RealmEntry>(model: string, id: string, data: Partial<T>) {
    const instance = this.getEntityById<T>(model, id, true);
    this.realmInstance.write(() => {
      Object.entries(data).forEach(([key, value]) => {
        // @ts-ignore
        if (key !== 'id') instance[key] = value;
      });
    });
  }

  upsert<T extends RealmEntry>(model: string, data: Partial<T>) {
    if (data.id) {
      const entity = this.getEntityById(model, data.id, false);
      if (entity) {
        this.update<T>(model, data.id, data);
        return;
      }
    }
    this.create(model, data);
  }

  getEntityById<T extends RealmEntry>(model: string, id: string, throwIfNotFound: boolean) {
    const collection = this.realmInstance.objects<T>(model);
    const [entity] = collection.filtered(`id = '${id}'`);
    if (!entity && throwIfNotFound) throw Error(`Model '${model}' with ID ${id} could not be found in the database.`);
    return entity;
  }

  getLastModelEntry<T extends RealmEntry>(model: string, dateProperty: string): T & Realm.Object {
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

  private executeInitFunctions() {
    REALM_INIT_FUNCTIONS.forEach((initFn) => initFn(this.realmInstance));
  }
}

export const RealmService = new RealmServiceClass();
