export function follow<T, U>(previous: T, classOfNext: new (...args: any[]) => U, additionalFields?: Partial<U>): U;

export interface Metadata {
  follow: Function;
  globalPosition: number;
  position: number;
  causationMessageStreamName?: string;
  causationMessagePosition?: number;
  causationMessageGlobalPosition?: number;
  correlationStreamName?: string;
  replyStreamName?: string;
}
export * from './write';
