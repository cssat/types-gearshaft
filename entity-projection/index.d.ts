import { GenericConstructor } from '../index';

export type RegisterProjection = <T, U>(
  messageType: GenericConstructor<U>,
  handler: (entity: T, input: U) => void,
) => void;

export interface EntityProjection<T> {
  project: Function;
  registerHandlers: Function;
}
export function createEntityProjection<T>(callback: (register: RegisterProjection) => void): EntityProjection<T>;
