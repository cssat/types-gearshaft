import { ClassLike } from '../..';
import { PostgresGateway } from '../../postgres-gateway';
import { DocumentStore } from '../';

type CreatePostgresDocumentStoreParams = {
  columns: { [key: string]: string };
  entity: ClassLike;
  idField: string;
  postgresGateway: PostgresGateway;
  table: string;
};

export function createPostgresDocumentStore<T>(options: CreatePostgresDocumentStoreParams): DocumentStore<T>;
