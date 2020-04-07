import { ClassLike, PostgresGateway } from '../..';
import { DocumentStore } from '../';

type CreatePostgresDocumentStoreParams = {
  columns: { [key: string]: string };
  entity: ClassLike;
  idField: string;
  postgresGateway: PostgresGateway;
  table: string;
};

export function createPostgresDocumentStore<T>(options: CreatePostgresDocumentStoreParams): DocumentStore<T>;
