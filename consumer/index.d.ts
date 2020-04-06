import { Log } from '../logging';
import { GenericConstructor } from '../index';
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
type ConsumerHandlerFunc<T> = (message: T) => void; // TODO: share with consumer handler registry?

type RegisterFn = (
  register: <T>(
    messageType: GenericConstructor<T>,
    handler: ConsumerHandlerFunc<T>
  ) => void
) => void;

export function createConsumer(options: {
  log: Log;
  name: string;
  positionUpdateInterval?: number;
  registerHandlers: RegisterFn;
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
