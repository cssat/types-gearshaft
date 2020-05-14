import { Log } from '../logging';
import { RegisterHandlers } from './consumer-handler-registry';

import { MessageStore } from '../message-store';
type Runner = {
  pause: () => Promise<void>;
  stop: () => Promise<void>;
  unpause: () => void;
};

type Consumer = {
  start: () => Runner;
  dispatch: <T>(messageData: T) => Promise<void>;
  positionStore: any; // TODO: what is this?
};

export function createConsumer(options: {
  log: Log;
  name: string;
  positionUpdateInterval?: number;
  registerHandlers: RegisterHandlers;
  messageStore: MessageStore;
  category: string;
  correlation?: string;
  groupMember?: number; // TODO: validation:
  groupSize?: number;
  strict?: boolean;
  highWaterMark?: number;
  lowWaterMark?: number;
  pollingIntervalMs?: number;
}): Consumer;
