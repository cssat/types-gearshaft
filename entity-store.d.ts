import { ClassLike } from './';
import { MessageStore } from './message-store';
import { EntityProjection } from './entity-projection';

type EntityStoreCreateOptions = {
  category: string;
  entity: ClassLike;
  projection: EntityProjection;
  messageStore: MessageStore;
};
export function createEntityStore(options: EntityStoreCreateOptions): any;
