import { MessageStore } from '../';
import { Log } from '../../logging';
import { PostgresGateway } from '../../postgres-gateway';
type MessageStoreCreateParams = {
  log?: Log;
  host?: string;
  port?: string;
  database?: string;
  user?: string;
  password?: string;
  postgresGateway?: PostgresGateway;
};
export function createMessageStore(options: MessageStoreCreateParams): MessageStore;
