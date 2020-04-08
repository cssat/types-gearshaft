import { GenericConstructor, Message } from '../index';
import { Log } from '../logging';

type ConsumerHandlerFunc<T> = (message: T) => void;
type ConsumerHandlerRegistry = {
  register<T>(messageType: GenericConstructor<T>, handler: ConsumerHandlerFunc<T>): void;
  handle<T>(messageData: Message<T>): void;
};

type ConsumerHandlerCreateOptions = {
  name: string;
  log?: Log;
};

export function createConsumerHandlerRegistry(options: ConsumerHandlerCreateOptions): ConsumerHandlerRegistry;
