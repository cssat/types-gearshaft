import { createEntityStore } from 'gearshaft/entity-store';
import { MessageStore } from 'gearshaft/message-store';

const messageStore: MessageStore = {
    get: a => a + 'foo',
    read: a => a + 'bar',
};

createEntityStore({
    category: '',
    entity: Object,
    projection: {},
    messageStore,
});
