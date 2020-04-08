import { Pool } from 'pg';

export class PostgresGateway extends Pool {}

interface DatabaseConfig {
  type: string;
  host?: string;
  database: string;
  user?: string;
  password?: string;
}

export function createPostgresGateway(settings: DatabaseConfig): PostgresGateway;
