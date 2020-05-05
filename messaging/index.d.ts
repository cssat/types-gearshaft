export function follow<T, U>(previous: T, classOfNext: new (...args: any[]) => U, additionalFields?: Partial<U>): U;

export type Metadata = {
  follow: Function;
  globalPosition: number;
  position: number;
  stream: string;
  time: string;
  causationMessageStreamName?: string;
  causationMessagePosition?: number;
  causationMessageGlobalPosition?: number;
  correlationStreamName?: string;
  replyStreamName?: string;
} & {
  [prop: string]: any;
};

export * from './write';
