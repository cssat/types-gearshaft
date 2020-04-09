import { PostgresGateway } from '../';

export interface DatabaseConfig {
  type: string;
  host?: string;
  database: string;
  user?: string;
  password?: string;
  port?: string;
}

export function createPostgresGateway(settings: DatabaseConfig): PostgresGateway;
