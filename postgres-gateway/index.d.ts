import { PostgresGateway } from '../';

interface DatabaseConfig {
  type: string;
  host?: string;
  database: string;
  user?: string;
  password?: string;
}

export function createPostgresGateway(
  settings: DatabaseConfig
): PostgresGateway;
