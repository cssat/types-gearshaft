import { GenericConstructor } from '../index';
import { Log } from '../logging';

export interface RegisterHandler {
  <T>(messageType: GenericConstructor<T>, handler: ConsumerHandlerFunc<T>): void;
}

export interface RegisterHandlers {
  (register: RegisterHandler): void;
}

export type ConsumerHandlerFunc<T> = (message: T) => void;
export interface ConsumerHandlerRegistry {
  register<T>(messageType: GenericConstructor<T>, handler: ConsumerHandlerFunc<T>): void;
  handle(messageData: any): void;
}

export interface ConsumerHandlerCreateOptions {
  name: string;
  log?: Log;
}

export function createConsumerHandlerRegistry(options: ConsumerHandlerCreateOptions): ConsumerHandlerRegistry;
