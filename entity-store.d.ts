import { ClassLike } from './';
import { MessageStore } from './message-store';
import { EntityProjection } from './entity-projection';

interface EntityStoreCreateOptions {
  category: string;
  entity: ClassLike;
  projection: EntityProjection;
  messageStore: MessageStore;
}

declare function createEntityStore(options: EntityStoreCreateOptions): any;

export { createEntityStore };
