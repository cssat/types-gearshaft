import { PostgresGateway } from '../';
import { ClientConfig } from 'pg';
export interface DatabaseConfig extends ClientConfig {
  type: string;
}

export function createPostgresGateway(settings: DatabaseConfig): PostgresGateway;
