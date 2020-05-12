import { GenericConstructor } from './';
import { MessageStore } from './message-store';
import { EntityProjection } from './entity-projection';

type EntityStoreCreateOptions<T> = {
  category: string;
  entity: GenericConstructor<T>;
  projection: EntityProjection<T>;
  messageStore: MessageStore;
};

type RecordMetadata = {
  version: number;
};

export type EntityStore<T> = {
  fetch: (id: string) => Promise<T>;
  fetchRecord: (id: string) => Promise<[T, RecordMetadata]>;
};

export function createEntityStore<T>(options: EntityStoreCreateOptions<T>): EntityStore<T>;
