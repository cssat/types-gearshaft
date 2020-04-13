import { ClassLike } from './';
import { MessageStore } from './message-store';
import { EntityProjection } from './entity-projection';

type EntityStoreCreateOptions = {
  category: string;
  entity: ClassLike;
  projection: EntityProjection;
  messageStore: MessageStore;
};

type RecordMetadata = {
  version: number;
};

export type EntityStore = {
  fetch: (id: string) => Promise<ClassLike>;
  fetchRecord: (id: string) => Promise<[ClassLike, RecordMetadata]>;
};

export function createEntityStore(options: EntityStoreCreateOptions): EntityStore;
