import { MessageStore } from '../';
import { Log } from '../../logging';
import { PostgresGateway } from '../../';
type MessageStoreCreateParams = {
  log?: Log;
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
  postgresGateway?: PostgresGateway;
};
export function createMessageStore(options: MessageStoreCreateParams): MessageStore;
