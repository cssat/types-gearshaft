import { Pool } from 'pg';

export type ClassLike = new (...args: any[]) => any;
export type GenericConstructor<T> = new (...args: any[]) => T;
export class PostgresGateway extends Pool {}

export type Message<T> = InstanceType<GenericConstructor<T>>;
