import { Log } from '../logging';
import { GenericConstructor } from '../';
import { EntityProjection } from '../entity-projection';

type IdentifyFn<T> = (message: T) => string;

type CreateDocumentProjectionParams<M, E> = {
  documentStore: any;
  entity: GenericConstructor<E>;
  identify: IdentifyFn<M>;
  log: Log;
  projection: EntityProjection<E>;
};

export function createDocumentProjection<M, E>(options: CreateDocumentProjectionParams<M, E>): void;
