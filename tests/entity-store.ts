import { createEntityStore } from '../entity-store';
import { MessageStore } from '../message-store';
import { EntityProjection } from '../entity-projection';

class Entity {}

const messageStore: MessageStore = {
  get: a => a + 'foo',
  read: a => a + 'bar',
};

const projection: EntityProjection<Entity> = {
  project: () => 'foo',
  registerHandlers: () => 'bar',
};

createEntityStore({
  category: '',
  entity: Entity,
  projection,
  messageStore,
});
