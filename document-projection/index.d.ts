import { Log } from '../logging';
import { GenericConstructor } from '../';
import { EntityProjection } from '../entity-projection';

type IdentifyFn<T> = (message: T) => string;

type CreateDocumentProjectionParams<M, E> = {
  documentStore: any;
  entity: GenericConstructor<E>;
  identify: IdentifyFn<M>;
  log: Log;
  projection: EntityProjection;
};

type ConsumerHandlerFunc<T> = (message: T) => void;
type RegisterFn = (register: <T>(messageType: GenericConstructor<T>, handler: ConsumerHandlerFunc<T>) => void) => void;

type CreateDocumentProjectionReturn<T> = {
  documentStore: any;
  registerHandlers: RegisterFn;
  handler: ConsumerHandlerFunc<T>;
};

export function createDocumentProjection<M, E, T>(
  options: CreateDocumentProjectionParams<M, E>,
): CreateDocumentProjectionReturn<T>;
