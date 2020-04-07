import { MessageStore } from '../';
import { Log } from '../../logging';

type MessageStoreCreateParams = {
  log?: Log;
  host?: string;
  port?: string;
  database?: string;
  user?: string;
  password?: string;
};
export function createMessageStore(options: MessageStoreCreateParams): MessageStore;
