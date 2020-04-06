import { createEntityStore } from '../entity-store';
import { MessageStore } from '../message-store';
import { EntityProjection } from '../entity-projection'
const messageStore: MessageStore = {
    get: a => a + 'foo',
    read: a => a + 'bar',
};

const projection = {
  project : 'foo',
  registerHandlers: 'bar'
}

createEntityStore({
    category: '',
    entity: Object,
    projection,
    messageStore,
});
